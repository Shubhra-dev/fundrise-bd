import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronUp, Download } from 'lucide-react';

const FlowchartViewer = () => {
  const [selectedFlow, setSelectedFlow] = useState('onboarding');
  const [exportFormat, setExportFormat] = useState('png');
  const [showExportMenu, setShowExportMenu] = useState(false);
  const flowchartRef = useRef(null);

  const handleExport = async (format) => {
    setShowExportMenu(false);

    const flowchart = flowcharts[selectedFlow];
    const svgElement = flowchartRef.current.querySelector('svg');

    if (!svgElement) return;

    // Clone the SVG to avoid modifying the original
    const clonedSvg = svgElement.cloneNode(true);

    // Get SVG dimensions
    const viewBox = clonedSvg.getAttribute('viewBox').split(' ');
    const width = parseFloat(viewBox[2]);
    const height = parseFloat(viewBox[3]);

    if (format === 'svg') {
      // Export as SVG
      const svgData = new XMLSerializer().serializeToString(clonedSvg);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl = URL.createObjectURL(svgBlob);
      const downloadLink = document.createElement('a');
      downloadLink.href = svgUrl;
      downloadLink.download = `${selectedFlow}-flowchart.svg`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(svgUrl);
    } else {
      // Export as PNG or JPG
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      // Set canvas size (2x for better quality)
      const scale = 2;
      canvas.width = width * scale;
      canvas.height = height * scale;

      // Fill white background for JPG
      if (format === 'jpg') {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Convert SVG to data URL
      const svgData = new XMLSerializer().serializeToString(clonedSvg);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);

      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(url);

        // Convert canvas to blob and download
        canvas.toBlob(
          (blob) => {
            const downloadUrl = URL.createObjectURL(blob);
            const downloadLink = document.createElement('a');
            downloadLink.href = downloadUrl;
            downloadLink.download = `${selectedFlow}-flowchart.${format}`;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            URL.revokeObjectURL(downloadUrl);
          },
          `image/${format === 'jpg' ? 'jpeg' : 'png'}`
        );
      };
      img.src = url;
    }
  };

  const flowcharts = {
    onboarding: {
      title: '1. User Onboarding Flowchart',
      color: '#10b981',
      svg: (
        <svg viewBox="0 0 800 1200" className="w-full h-auto">
          {/* Start */}
          <ellipse
            cx="400"
            cy="50"
            rx="80"
            ry="30"
            fill="#10b981"
            stroke="#065f46"
            strokeWidth="2"
          />
          <text x="400" y="58" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
            START
          </text>

          {/* Arrow */}
          <line
            x1="400"
            y1="80"
            x2="400"
            y2="120"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />

          {/* App Store */}
          <rect
            x="300"
            y="120"
            width="200"
            height="60"
            rx="8"
            fill="#3b82f6"
            stroke="#1e40af"
            strokeWidth="2"
          />
          <text x="400" y="145" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Download App
          </text>
          <text x="400" y="165" textAnchor="middle" fill="white" fontSize="12">
            App Store/Play Store
          </text>

          <line
            x1="400"
            y1="180"
            x2="400"
            y2="220"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />

          {/* Open App */}
          <rect
            x="300"
            y="220"
            width="200"
            height="60"
            rx="8"
            fill="#3b82f6"
            stroke="#1e40af"
            strokeWidth="2"
          />
          <text x="400" y="245" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Open App
          </text>
          <text x="400" y="265" textAnchor="middle" fill="white" fontSize="12">
            View Splash Screen
          </text>

          <line
            x1="400"
            y1="280"
            x2="400"
            y2="320"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />

          {/* Decision: Has Account? */}
          <path
            d="M 400 320 L 500 370 L 400 420 L 300 370 Z"
            fill="#f59e0b"
            stroke="#b45309"
            strokeWidth="2"
          />
          <text x="400" y="370" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
            Has
          </text>
          <text x="400" y="385" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
            Account?
          </text>

          {/* No - Sign Up */}
          <line
            x1="300"
            y1="370"
            x2="200"
            y2="370"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          <text x="240" y="365" fill="#374151" fontSize="12" fontWeight="bold">
            No
          </text>

          <rect
            x="100"
            y="440"
            width="200"
            height="80"
            rx="8"
            fill="#8b5cf6"
            stroke="#5b21b6"
            strokeWidth="2"
          />
          <text x="200" y="465" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Sign Up
          </text>
          <text x="200" y="485" textAnchor="middle" fill="white" fontSize="11">
            Name, Email, Password
          </text>
          <text x="200" y="502" textAnchor="middle" fill="white" fontSize="11">
            Gender, Mobile
          </text>

          <line
            x1="200"
            y1="520"
            x2="200"
            y2="560"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />

          {/* Email Verification */}
          <rect
            x="100"
            y="560"
            width="200"
            height="60"
            rx="8"
            fill="#8b5cf6"
            stroke="#5b21b6"
            strokeWidth="2"
          />
          <text x="200" y="585" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Email Verification
          </text>
          <text x="200" y="605" textAnchor="middle" fill="white" fontSize="12">
            Click link in email
          </text>

          <line x1="200" y1="620" x2="200" y2="660" stroke="#374151" strokeWidth="2" />
          <line
            x1="200"
            y1="660"
            x2="400"
            y2="660"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />

          {/* Yes - Login */}
          <line
            x1="500"
            y1="370"
            x2="600"
            y2="370"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          <text x="560" y="365" fill="#374151" fontSize="12" fontWeight="bold">
            Yes
          </text>

          <rect
            x="500"
            y="480"
            width="200"
            height="60"
            rx="8"
            fill="#8b5cf6"
            stroke="#5b21b6"
            strokeWidth="2"
          />
          <text x="600" y="505" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Login
          </text>
          <text x="600" y="525" textAnchor="middle" fill="white" fontSize="12">
            Email + Password
          </text>

          <line x1="600" y1="540" x2="600" y2="660" stroke="#374151" strokeWidth="2" />
          <line
            x1="600"
            y1="660"
            x2="400"
            y2="660"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />

          {/* Tutorial */}
          <rect
            x="300"
            y="680"
            width="200"
            height="60"
            rx="8"
            fill="#3b82f6"
            stroke="#1e40af"
            strokeWidth="2"
          />
          <text x="400" y="705" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Quick Tutorial
          </text>
          <text x="400" y="725" textAnchor="middle" fill="white" fontSize="12">
            3-5 slides
          </text>

          <line
            x1="400"
            y1="740"
            x2="400"
            y2="780"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />

          {/* Dashboard */}
          <rect
            x="300"
            y="780"
            width="200"
            height="60"
            rx="8"
            fill="#10b981"
            stroke="#065f46"
            strokeWidth="2"
          />
          <text x="400" y="805" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Home Dashboard
          </text>
          <text x="400" y="825" textAnchor="middle" fill="white" fontSize="12">
            Welcome Screen
          </text>

          <line
            x1="400"
            y1="840"
            x2="400"
            y2="880"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />

          {/* Prompt */}
          <rect
            x="300"
            y="880"
            width="200"
            height="60"
            rx="8"
            fill="#ec4899"
            stroke="#be185d"
            strokeWidth="2"
          />
          <text x="400" y="905" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Action Prompt
          </text>
          <text x="400" y="925" textAnchor="middle" fill="white" fontSize="12">
            "Plant your first tree!"
          </text>

          <line
            x1="400"
            y1="940"
            x2="400"
            y2="980"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />

          {/* End */}
          <ellipse
            cx="400"
            cy="1010"
            rx="80"
            ry="30"
            fill="#10b981"
            stroke="#065f46"
            strokeWidth="2"
          />
          <text x="400" y="1018" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
            END
          </text>

          {/* Arrow marker definition */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="#374151" />
            </marker>
          </defs>
        </svg>
      ),
    },

    plantTree: {
      title: '2. Plant a Tree Flowchart',
      color: '#059669',
      svg: (
        <svg viewBox="0 0 800 1400" className="w-full h-auto">
          {/* Start */}
          <ellipse
            cx="400"
            cy="50"
            rx="80"
            ry="30"
            fill="#059669"
            stroke="#065f46"
            strokeWidth="2"
          />
          <text x="400" y="58" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
            START
          </text>

          <line
            x1="400"
            y1="80"
            x2="400"
            y2="120"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead2)"
          />

          {/* Click Green Footprint */}
          <rect
            x="300"
            y="120"
            width="200"
            height="60"
            rx="8"
            fill="#3b82f6"
            stroke="#1e40af"
            strokeWidth="2"
          />
          <text x="400" y="145" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Navigate
          </text>
          <text x="400" y="165" textAnchor="middle" fill="white" fontSize="12">
            Click "Green Footprint"
          </text>

          <line
            x1="400"
            y1="180"
            x2="400"
            y2="220"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead2)"
          />

          {/* Form */}
          <rect
            x="280"
            y="220"
            width="240"
            height="100"
            rx="8"
            fill="#8b5cf6"
            stroke="#5b21b6"
            strokeWidth="2"
          />
          <text x="400" y="245" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Fill Tree Details
          </text>
          <text x="400" y="265" textAnchor="middle" fill="white" fontSize="11">
            • Tree Species
          </text>
          <text x="400" y="282" textAnchor="middle" fill="white" fontSize="11">
            • Planting Date
          </text>
          <text x="400" y="299" textAnchor="middle" fill="white" fontSize="11">
            • Location (GPS/Manual)
          </text>

          <line
            x1="400"
            y1="320"
            x2="400"
            y2="360"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead2)"
          />

          {/* Decision: Add Photo? */}
          <path
            d="M 400 360 L 500 410 L 400 460 L 300 410 Z"
            fill="#f59e0b"
            stroke="#b45309"
            strokeWidth="2"
          />
          <text x="400" y="410" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
            Add Photo?
          </text>

          {/* Yes - Upload Photo */}
          <line
            x1="500"
            y1="410"
            x2="600"
            y2="410"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead2)"
          />
          <text x="550" y="405" fill="#374151" fontSize="12" fontWeight="bold">
            Yes
          </text>

          <rect
            x="550"
            y="480"
            width="180"
            height="60"
            rx="8"
            fill="#8b5cf6"
            stroke="#5b21b6"
            strokeWidth="2"
          />
          <text x="640" y="505" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Upload Photo
          </text>
          <text x="640" y="525" textAnchor="middle" fill="white" fontSize="12">
            Camera/Gallery
          </text>

          <line x1="640" y1="540" x2="640" y2="580" stroke="#374151" strokeWidth="2" />
          <line
            x1="640"
            y1="580"
            x2="400"
            y2="580"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead2)"
          />

          {/* No - Skip */}
          <line
            x1="400"
            y1="460"
            x2="400"
            y2="580"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead2)"
          />
          <text x="420" y="520" fill="#374151" fontSize="12" fontWeight="bold">
            No/Skip
          </text>

          {/* Submit */}
          <rect
            x="300"
            y="600"
            width="200"
            height="60"
            rx="8"
            fill="#3b82f6"
            stroke="#1e40af"
            strokeWidth="2"
          />
          <text x="400" y="625" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Submit
          </text>
          <text x="400" y="645" textAnchor="middle" fill="white" fontSize="12">
            Validate & Save
          </text>

          <line
            x1="400"
            y1="660"
            x2="400"
            y2="700"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead2)"
          />

          {/* Processing */}
          <rect
            x="300"
            y="700"
            width="200"
            height="60"
            rx="8"
            fill="#6366f1"
            stroke="#4338ca"
            strokeWidth="2"
          />
          <text x="400" y="725" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Processing
          </text>
          <text x="400" y="745" textAnchor="middle" fill="white" fontSize="12">
            Generate QR Code
          </text>

          <line
            x1="400"
            y1="760"
            x2="400"
            y2="800"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead2)"
          />

          {/* Success Message */}
          <rect
            x="280"
            y="800"
            width="240"
            height="80"
            rx="8"
            fill="#10b981"
            stroke="#059669"
            strokeWidth="2"
          />
          <text x="400" y="825" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Success! 🎉
          </text>
          <text x="400" y="845" textAnchor="middle" fill="white" fontSize="12">
            Tree Registered
          </text>
          <text x="400" y="865" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
            +10 Green Points Earned!
          </text>

          <line
            x1="400"
            y1="880"
            x2="400"
            y2="920"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead2)"
          />

          {/* Display QR Code */}
          <rect
            x="300"
            y="920"
            width="200"
            height="60"
            rx="8"
            fill="#3b82f6"
            stroke="#1e40af"
            strokeWidth="2"
          />
          <text x="400" y="945" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Display QR Code
          </text>
          <text x="400" y="965" textAnchor="middle" fill="white" fontSize="12">
            Save & Share options
          </text>

          <line
            x1="400"
            y1="980"
            x2="400"
            y2="1020"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead2)"
          />

          {/* Decision: Photo Uploaded? */}
          <path
            d="M 400 1020 L 500 1070 L 400 1120 L 300 1070 Z"
            fill="#f59e0b"
            stroke="#b45309"
            strokeWidth="2"
          />
          <text x="400" y="1065" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
            Photo
          </text>
          <text x="400" y="1080" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
            Uploaded?
          </text>

          {/* Yes - Bonus Points */}
          <line
            x1="500"
            y1="1070"
            x2="600"
            y2="1070"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead2)"
          />
          <text x="550" y="1065" fill="#374151" fontSize="12" fontWeight="bold">
            Yes
          </text>

          <rect
            x="550"
            y="1140"
            width="180"
            height="60"
            rx="8"
            fill="#10b981"
            stroke="#059669"
            strokeWidth="2"
          />
          <text x="640" y="1165" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Bonus! 🎁
          </text>
          <text x="640" y="1185" textAnchor="middle" fill="white" fontSize="12">
            +5 Green Points
          </text>

          <line x1="640" y1="1200" x2="640" y2="1240" stroke="#374151" strokeWidth="2" />
          <line
            x1="640"
            y1="1240"
            x2="400"
            y2="1240"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead2)"
          />

          {/* No - Continue */}
          <line
            x1="400"
            y1="1120"
            x2="400"
            y2="1240"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead2)"
          />
          <text x="420" y="1180" fill="#374151" fontSize="12" fontWeight="bold">
            No
          </text>

          {/* End */}
          <ellipse
            cx="400"
            cy="1270"
            rx="80"
            ry="30"
            fill="#059669"
            stroke="#065f46"
            strokeWidth="2"
          />
          <text x="400" y="1278" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
            END
          </text>

          <defs>
            <marker
              id="arrowhead2"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="#374151" />
            </marker>
          </defs>
        </svg>
      ),
    },

    shopping: {
      title: '3. Shopping & Checkout Flowchart',
      color: '#3b82f6',
      svg: (
        <svg viewBox="0 0 800 1600" className="w-full h-auto">
          {/* Start */}
          <ellipse
            cx="400"
            cy="50"
            rx="80"
            ry="30"
            fill="#3b82f6"
            stroke="#1e40af"
            strokeWidth="2"
          />
          <text x="400" y="58" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
            START
          </text>

          <line
            x1="400"
            y1="80"
            x2="400"
            y2="120"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead3)"
          />

          {/* Browse Marketplace */}
          <rect
            x="300"
            y="120"
            width="200"
            height="60"
            rx="8"
            fill="#8b5cf6"
            stroke="#5b21b6"
            strokeWidth="2"
          />
          <text x="400" y="145" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Browse Marketplace
          </text>
          <text x="400" y="165" textAnchor="middle" fill="white" fontSize="12">
            View packages
          </text>

          <line
            x1="400"
            y1="180"
            x2="400"
            y2="220"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead3)"
          />

          {/* Select Product */}
          <rect
            x="300"
            y="220"
            width="200"
            height="60"
            rx="8"
            fill="#8b5cf6"
            stroke="#5b21b6"
            strokeWidth="2"
          />
          <text x="400" y="245" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Select Product
          </text>
          <text x="400" y="265" textAnchor="middle" fill="white" fontSize="12">
            View details
          </text>

          <line
            x1="400"
            y1="280"
            x2="400"
            y2="320"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead3)"
          />

          {/* Decision: Add to Cart? */}
          <path
            d="M 400 320 L 500 370 L 400 420 L 300 370 Z"
            fill="#f59e0b"
            stroke="#b45309"
            strokeWidth="2"
          />
          <text x="400" y="365" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
            Add to
          </text>
          <text x="400" y="380" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
            Cart?
          </text>

          {/* No - Back to Browse */}
          <line x1="300" y1="370" x2="200" y2="370" stroke="#374151" strokeWidth="2" />
          <line x1="200" y1="370" x2="200" y2="150" stroke="#374151" strokeWidth="2" />
          <line
            x1="200"
            y1="150"
            x2="300"
            y2="150"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead3)"
          />
          <text x="150" y="365" fill="#374151" fontSize="12" fontWeight="bold">
            No
          </text>

          {/* Yes - Add to Cart */}
          <line
            x1="500"
            y1="370"
            x2="600"
            y2="370"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead3)"
          />
          <text x="550" y="365" fill="#374151" fontSize="12" fontWeight="bold">
            Yes
          </text>

          <rect
            x="550"
            y="440"
            width="180"
            height="60"
            rx="8"
            fill="#10b981"
            stroke="#059669"
            strokeWidth="2"
          />
          <text x="640" y="465" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Added to Cart
          </text>
          <text x="640" y="485" textAnchor="middle" fill="white" fontSize="12">
            Item saved
          </text>

          <line x1="640" y1="500" x2="640" y2="540" stroke="#374151" strokeWidth="2" />
          <line
            x1="640"
            y1="540"
            x2="400"
            y2="540"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead3)"
          />

          {/* Decision: Continue Shopping? */}
          <path
            d="M 400 560 L 500 610 L 400 660 L 300 610 Z"
            fill="#f59e0b"
            stroke="#b45309"
            strokeWidth="2"
          />
          <text x="400" y="605" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
            Continue
          </text>
          <text x="400" y="620" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
            Shopping?
          </text>

          {/* Yes - Back to Browse */}
          <line x1="300" y1="610" x2="200" y2="610" stroke="#374151" strokeWidth="2" />
          <line x1="200" y1="610" x2="200" y2="150" stroke="#374151" strokeWidth="2" />
          <line
            x1="200"
            y1="150"
            x2="300"
            y2="150"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead3)"
          />
          <text x="150" y="605" fill="#374151" fontSize="12" fontWeight="bold">
            Yes
          </text>

          {/* No - Proceed to Checkout */}
          <line
            x1="400"
            y1="660"
            x2="400"
            y2="700"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead3)"
          />
          <text x="420" y="685" fill="#374151" fontSize="12" fontWeight="bold">
            No
          </text>

          {/* Checkout */}
          <rect
            x="300"
            y="700"
            width="200"
            height="60"
            rx="8"
            fill="#3b82f6"
            stroke="#1e40af"
            strokeWidth="2"
          />
          <text x="400" y="725" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Proceed to Checkout
          </text>
          <text x="400" y="745" textAnchor="middle" fill="white" fontSize="12">
            Review cart
          </text>

          <line
            x1="400"
            y1="760"
            x2="400"
            y2="800"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead3)"
          />

          {/* Delivery Details */}
          <rect
            x="280"
            y="800"
            width="240"
            height="80"
            rx="8"
            fill="#8b5cf6"
            stroke="#5b21b6"
            strokeWidth="2"
          />
          <text x="400" y="825" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Enter Details
          </text>
          <text x="400" y="845" textAnchor="middle" fill="white" fontSize="11">
            • Delivery Address
          </text>
          <text x="400" y="862" textAnchor="middle" fill="white" fontSize="11">
            • Contact Number
          </text>

          <line
            x1="400"
            y1="880"
            x2="400"
            y2="920"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead3)"
          />

          {/* Payment Method */}
          <rect
            x="280"
            y="920"
            width="240"
            height="80"
            rx="8"
            fill="#8b5cf6"
            stroke="#5b21b6"
            strokeWidth="2"
          />
          <text x="400" y="945" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Select Payment
          </text>
          <text x="400" y="965" textAnchor="middle" fill="white" fontSize="11">
            bKash | Nagad | Card
          </text>
          <text x="400" y="982" textAnchor="middle" fill="white" fontSize="11">
            Bank Transfer
          </text>

          <line
            x1="400"
            y1="1000"
            x2="400"
            y2="1040"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead3)"
          />

          {/* Payment Gateway */}
          <rect
            x="300"
            y="1040"
            width="200"
            height="60"
            rx="8"
            fill="#ec4899"
            stroke="#be185d"
            strokeWidth="2"
          />
          <text x="400" y="1065" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Payment Gateway
          </text>
          <text x="400" y="1085" textAnchor="middle" fill="white" fontSize="12">
            Process payment
          </text>

          <line
            x1="400"
            y1="1100"
            x2="400"
            y2="1140"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead3)"
          />

          {/* Decision: Payment Success? */}
          <path
            d="M 400 1140 L 500 1190 L 400 1240 L 300 1190 Z"
            fill="#f59e0b"
            stroke="#b45309"
            strokeWidth="2"
          />
          <text x="400" y="1185" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
            Payment
          </text>
          <text x="400" y="1200" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
            Success?
          </text>

          {/* No - Payment Failed */}
          <line
            x1="300"
            y1="1190"
            x2="150"
            y2="1190"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead3)"
          />
          <text x="220" y="1185" fill="#374151" fontSize="12" fontWeight="bold">
            No
          </text>

          <rect
            x="50"
            y="1260"
            width="200"
            height="60"
            rx="8"
            fill="#ef4444"
            stroke="#b91c1c"
            strokeWidth="2"
          />
          <text x="150" y="1285" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Payment Failed
          </text>
          <text x="150" y="1305" textAnchor="middle" fill="white" fontSize="12">
            Retry option
          </text>

          <line x1="150" y1="1260" x2="150" y2="1070" stroke="#374151" strokeWidth="2" />
          <line
            x1="150"
            y1="1070"
            x2="300"
            y2="1070"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead3)"
          />

          {/* Yes - Order Confirmed */}
          <line
            x1="500"
            y1="1190"
            x2="600"
            y2="1190"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead3)"
          />
          <text x="550" y="1185" fill="#374151" fontSize="12" fontWeight="bold">
            Yes
          </text>

          <rect
            x="520"
            y="1260"
            width="180"
            height="80"
            rx="8"
            fill="#10b981"
            stroke="#059669"
            strokeWidth="2"
          />
          <text x="610" y="1285" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Order Confirmed! 🎉
          </text>
          <text x="610" y="1305" textAnchor="middle" fill="white" fontSize="11">
            Order #12345
          </text>
          <text x="610" y="1322" textAnchor="middle" fill="white" fontSize="11">
            Email sent
          </text>

          <line x1="610" y1="1340" x2="610" y2="1380" stroke="#374151" strokeWidth="2" />
          <line
            x1="610"
            y1="1380"
            x2="400"
            y2="1380"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead3)"
          />

          {/* Track Order */}
          <rect
            x="300"
            y="1400"
            width="200"
            height="60"
            rx="8"
            fill="#3b82f6"
            stroke="#1e40af"
            strokeWidth="2"
          />
          <text x="400" y="1425" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Track Order
          </text>
          <text x="400" y="1445" textAnchor="middle" fill="white" fontSize="12">
            Delivery updates
          </text>

          <line
            x1="400"
            y1="1460"
            x2="400"
            y2="1500"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead3)"
          />

          {/* End */}
          <ellipse
            cx="400"
            cy="1530"
            rx="80"
            ry="30"
            fill="#3b82f6"
            stroke="#1e40af"
            strokeWidth="2"
          />
          <text x="400" y="1538" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
            END
          </text>

          <defs>
            <marker
              id="arrowhead3"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="#374151" />
            </marker>
          </defs>
        </svg>
      ),
    },

    treeDiagnosis: {
      title: '4. AI Plant Diagnosis Flowchart',
      color: '#ef4444',
      svg: (
        <svg viewBox="0 0 800 1300" className="w-full h-auto">
          {/* Start */}
          <ellipse
            cx="400"
            cy="50"
            rx="80"
            ry="30"
            fill="#ef4444"
            stroke="#b91c1c"
            strokeWidth="2"
          />
          <text x="400" y="58" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
            START
          </text>

          <line
            x1="400"
            y1="80"
            x2="400"
            y2="120"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead4)"
          />

          {/* Navigate to Tree Doctor */}
          <rect
            x="300"
            y="120"
            width="200"
            height="60"
            rx="8"
            fill="#3b82f6"
            stroke="#1e40af"
            strokeWidth="2"
          />
          <text x="400" y="145" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Open Tree Doctor
          </text>
          <text x="400" y="165" textAnchor="middle" fill="white" fontSize="12">
            Diagnose Disease
          </text>

          <line
            x1="400"
            y1="180"
            x2="400"
            y2="220"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead4)"
          />

          {/* Take/Upload Photo */}
          <rect
            x="300"
            y="220"
            width="200"
            height="60"
            rx="8"
            fill="#8b5cf6"
            stroke="#5b21b6"
            strokeWidth="2"
          />
          <text x="400" y="245" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Capture Image
          </text>
          <text x="400" y="265" textAnchor="middle" fill="white" fontSize="12">
            Camera/Gallery
          </text>

          <line
            x1="400"
            y1="280"
            x2="400"
            y2="320"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead4)"
          />

          {/* AI Processing */}
          <rect
            x="300"
            y="320"
            width="200"
            height="60"
            rx="8"
            fill="#6366f1"
            stroke="#4338ca"
            strokeWidth="2"
          />
          <text x="400" y="345" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            AI Analysis
          </text>
          <text x="400" y="365" textAnchor="middle" fill="white" fontSize="12">
            Processing image...
          </text>

          <line
            x1="400"
            y1="380"
            x2="400"
            y2="420"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead4)"
          />

          {/* Decision: Confidence Level */}
          <path
            d="M 400 420 L 520 480 L 400 540 L 280 480 Z"
            fill="#f59e0b"
            stroke="#b45309"
            strokeWidth="2"
          />
          <text x="400" y="475" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
            Confidence
          </text>
          <text x="400" y="490" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
            {' '}
            70%?
          </text>

          {/* Low Confidence */}
          <line
            x1="280"
            y1="480"
            x2="150"
            y2="480"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead4)"
          />
          <text x="200" y="475" fill="#374151" fontSize="11" fontWeight="bold">
            Low
          </text>

          <rect
            x="50"
            y="550"
            width="200"
            height="80"
            rx="8"
            fill="#f59e0b"
            stroke="#b45309"
            strokeWidth="2"
          />
          <text x="150" y="575" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
            Uncertain Result
          </text>
          <text x="150" y="595" textAnchor="middle" fill="white" fontSize="11">
            Show basic info
          </text>
          <text x="150" y="612" textAnchor="middle" fill="white" fontSize="11">
            Suggest botanist
          </text>

          <line x1="150" y1="630" x2="150" y2="750" stroke="#374151" strokeWidth="2" />
          <line
            x1="150"
            y1="750"
            x2="300"
            y2="750"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead4)"
          />

          {/* High Confidence */}
          <line
            x1="520"
            y1="480"
            x2="650"
            y2="480"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead4)"
          />
          <text x="590" y="475" fill="#374151" fontSize="11" fontWeight="bold">
            High
          </text>

          <rect
            x="550"
            y="550"
            width="200"
            height="100"
            rx="8"
            fill="#10b981"
            stroke="#059669"
            strokeWidth="2"
          />
          <text x="650" y="575" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
            Diagnosis Found!
          </text>
          <text x="650" y="595" textAnchor="middle" fill="white" fontSize="11">
            Disease: Leaf Spot
          </text>
          <text x="650" y="612" textAnchor="middle" fill="white" fontSize="11">
            Confidence: 87%
          </text>
          <text x="650" y="629" textAnchor="middle" fill="white" fontSize="11">
            Show treatment
          </text>

          <line x1="650" y1="650" x2="650" y2="750" stroke="#374151" strokeWidth="2" />
          <line
            x1="650"
            y1="750"
            x2="500"
            y2="750"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead4)"
          />

          {/* Display Results */}
          <rect
            x="280"
            y="770"
            width="240"
            height="100"
            rx="8"
            fill="#3b82f6"
            stroke="#1e40af"
            strokeWidth="2"
          />
          <text x="400" y="795" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Show Results
          </text>
          <text x="400" y="815" textAnchor="middle" fill="white" fontSize="11">
            • Symptoms
          </text>
          <text x="400" y="832" textAnchor="middle" fill="white" fontSize="11">
            • Treatment options
          </text>
          <text x="400" y="849" textAnchor="middle" fill="white" fontSize="11">
            • Prevention tips
          </text>

          <line
            x1="400"
            y1="870"
            x2="400"
            y2="910"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead4)"
          />

          {/* Decision: Consult Botanist? */}
          <path
            d="M 400 910 L 500 960 L 400 1010 L 300 960 Z"
            fill="#f59e0b"
            stroke="#b45309"
            strokeWidth="2"
          />
          <text x="400" y="955" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
            Consult
          </text>
          <text x="400" y="970" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
            Botanist?
          </text>

          {/* Yes - Request Consultation */}
          <line
            x1="500"
            y1="960"
            x2="600"
            y2="960"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead4)"
          />
          <text x="550" y="955" fill="#374151" fontSize="11" fontWeight="bold">
            Yes
          </text>

          <rect
            x="520"
            y="1030"
            width="180"
            height="60"
            rx="8"
            fill="#8b5cf6"
            stroke="#5b21b6"
            strokeWidth="2"
          />
          <text x="610" y="1055" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
            Request Sent
          </text>
          <text x="610" y="1075" textAnchor="middle" fill="white" fontSize="11">
            Botanist notified
          </text>

          <line x1="610" y1="1090" x2="610" y2="1130" stroke="#374151" strokeWidth="2" />
          <line
            x1="610"
            y1="1130"
            x2="400"
            y2="1130"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead4)"
          />

          {/* No - Save to History */}
          <line
            x1="400"
            y1="1010"
            x2="400"
            y2="1130"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead4)"
          />
          <text x="420" y="1070" fill="#374151" fontSize="11" fontWeight="bold">
            No
          </text>

          {/* Save Diagnosis */}
          <rect
            x="300"
            y="1150"
            width="200"
            height="60"
            rx="8"
            fill="#10b981"
            stroke="#059669"
            strokeWidth="2"
          />
          <text x="400" y="1175" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Save to History
          </text>
          <text x="400" y="1195" textAnchor="middle" fill="white" fontSize="12">
            Saved successfully
          </text>

          <line
            x1="400"
            y1="1210"
            x2="400"
            y2="1250"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead4)"
          />

          {/* End */}
          <ellipse
            cx="400"
            cy="1280"
            rx="80"
            ry="30"
            fill="#ef4444"
            stroke="#b91c1c"
            strokeWidth="2"
          />
          <text x="400" y="1288" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
            END
          </text>

          <defs>
            <marker
              id="arrowhead4"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="#374151" />
            </marker>
          </defs>
        </svg>
      ),
    },

    pointsRedemption: {
      title: '5. Points Redemption Flowchart',
      color: '#eab308',
      svg: (
        <svg viewBox="0 0 800 1200" className="w-full h-auto">
          {/* Start */}
          <ellipse
            cx="400"
            cy="50"
            rx="80"
            ry="30"
            fill="#eab308"
            stroke="#a16207"
            strokeWidth="2"
          />
          <text x="400" y="58" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
            START
          </text>

          <line
            x1="400"
            y1="80"
            x2="400"
            y2="120"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead5)"
          />

          {/* Check Points Balance */}
          <rect
            x="300"
            y="120"
            width="200"
            height="60"
            rx="8"
            fill="#3b82f6"
            stroke="#1e40af"
            strokeWidth="2"
          />
          <text x="400" y="145" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            View Balance
          </text>
          <text x="400" y="165" textAnchor="middle" fill="white" fontSize="12">
            1,500 Green Points
          </text>

          <line
            x1="400"
            y1="180"
            x2="400"
            y2="220"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead5)"
          />

          {/* Navigate to Redemption */}
          <rect
            x="300"
            y="220"
            width="200"
            height="60"
            rx="8"
            fill="#3b82f6"
            stroke="#1e40af"
            strokeWidth="2"
          />
          <text x="400" y="245" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Click Redeem
          </text>
          <text x="400" y="265" textAnchor="middle" fill="white" fontSize="12">
            Open redemption page
          </text>

          <line
            x1="400"
            y1="280"
            x2="400"
            y2="320"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead5)"
          />

          {/* Decision: Minimum Points? */}
          <path
            d="M 400 320 L 500 370 L 400 420 L 300 370 Z"
            fill="#f59e0b"
            stroke="#b45309"
            strokeWidth="2"
          />
          <text x="400" y="365" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
            Points ≥
          </text>
          <text x="400" y="380" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
            1000?
          </text>

          {/* No - Insufficient Points */}
          <line
            x1="300"
            y1="370"
            x2="150"
            y2="370"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead5)"
          />
          <text x="220" y="365" fill="#374151" fontSize="11" fontWeight="bold">
            No
          </text>

          <rect
            x="50"
            y="440"
            width="200"
            height="80"
            rx="8"
            fill="#ef4444"
            stroke="#b91c1c"
            strokeWidth="2"
          />
          <text x="150" y="465" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
            Error Message
          </text>
          <text x="150" y="485" textAnchor="middle" fill="white" fontSize="11">
            Minimum 1000
          </text>
          <text x="150" y="502" textAnchor="middle" fill="white" fontSize="11">
            points required
          </text>

          <line x1="150" y1="520" x2="150" y2="1080" stroke="#374151" strokeWidth="2" />
          <line
            x1="150"
            y1="1080"
            x2="300"
            y2="1080"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead5)"
          />

          {/* Yes - Calculate Amount */}
          <line
            x1="500"
            y1="370"
            x2="600"
            y2="370"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead5)"
          />
          <text x="550" y="365" fill="#374151" fontSize="11" fontWeight="bold">
            Yes
          </text>

          <rect
            x="520"
            y="440"
            width="180"
            height="80"
            rx="8"
            fill="#10b981"
            stroke="#059669"
            strokeWidth="2"
          />
          <text x="610" y="465" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
            Calculate
          </text>
          <text x="610" y="485" textAnchor="middle" fill="white" fontSize="11">
            1,500 points =
          </text>
          <text x="610" y="502" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">
            ৳11.25
          </text>

          <line x1="610" y1="520" x2="610" y2="560" stroke="#374151" strokeWidth="2" />
          <line
            x1="610"
            y1="560"
            x2="400"
            y2="560"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead5)"
          />

          {/* Select Payment Method */}
          <rect
            x="280"
            y="580"
            width="240"
            height="80"
            rx="8"
            fill="#8b5cf6"
            stroke="#5b21b6"
            strokeWidth="2"
          />
          <text x="400" y="605" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Select Method
          </text>
          <text x="400" y="625" textAnchor="middle" fill="white" fontSize="11">
            bKash | Nagad
          </text>
          <text x="400" y="642" textAnchor="middle" fill="white" fontSize="11">
            Bank | In-app Credit
          </text>

          <line
            x1="400"
            y1="660"
            x2="400"
            y2="700"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead5)"
          />

          {/* Enter Account Details */}
          <rect
            x="280"
            y="700"
            width="240"
            height="80"
            rx="8"
            fill="#8b5cf6"
            stroke="#5b21b6"
            strokeWidth="2"
          />
          <text x="400" y="725" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Enter Details
          </text>
          <text x="400" y="745" textAnchor="middle" fill="white" fontSize="11">
            Account number
          </text>
          <text x="400" y="762" textAnchor="middle" fill="white" fontSize="11">
            Account name
          </text>

          <line
            x1="400"
            y1="780"
            x2="400"
            y2="820"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead5)"
          />

          {/* Confirm Redemption */}
          <rect
            x="300"
            y="820"
            width="200"
            height="60"
            rx="8"
            fill="#3b82f6"
            stroke="#1e40af"
            strokeWidth="2"
          />
          <text x="400" y="845" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Confirm Request
          </text>
          <text x="400" y="865" textAnchor="middle" fill="white" fontSize="12">
            Review & submit
          </text>

          <line
            x1="400"
            y1="880"
            x2="400"
            y2="920"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead5)"
          />

          {/* Processing */}
          <rect
            x="280"
            y="920"
            width="240"
            height="80"
            rx="8"
            fill="#6366f1"
            stroke="#4338ca"
            strokeWidth="2"
          />
          <text x="400" y="945" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Processing
          </text>
          <text x="400" y="965" textAnchor="middle" fill="white" fontSize="11">
            Status: Pending
          </text>
          <text x="400" y="982" textAnchor="middle" fill="white" fontSize="11">
            ETA: 3-5 business days
          </text>

          <line
            x1="400"
            y1="1000"
            x2="400"
            y2="1040"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead5)"
          />

          {/* Success */}
          <rect
            x="280"
            y="1040"
            width="240"
            height="80"
            rx="8"
            fill="#10b981"
            stroke="#059669"
            strokeWidth="2"
          />
          <text x="400" y="1065" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Success! 🎉
          </text>
          <text x="400" y="1085" textAnchor="middle" fill="white" fontSize="11">
            Payment sent
          </text>
          <text x="400" y="1102" textAnchor="middle" fill="white" fontSize="11">
            Notification sent
          </text>

          <line
            x1="400"
            y1="1120"
            x2="400"
            y2="1160"
            stroke="#374151"
            strokeWidth="2"
            markerEnd="url(#arrowhead5)"
          />

          {/* End */}
          <ellipse
            cx="400"
            cy="1190"
            rx="80"
            ry="30"
            fill="#eab308"
            stroke="#a16207"
            strokeWidth="2"
          />
          <text x="400" y="1198" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
            END
          </text>

          <defs>
            <marker
              id="arrowhead5"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="#374151" />
            </marker>
          </defs>
        </svg>
      ),
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2">My Forest App</h1>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">User Flow Flowcharts</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Professional flowchart diagrams for development and design teams. Select a flow to view
            detailed process diagrams with decision points and user interactions.
          </p>
        </div>

        {/* Flow Selector */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Select User Flow:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {Object.entries(flowcharts).map(([key, flow]) => (
              <button
                key={key}
                onClick={() => setSelectedFlow(key)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedFlow === key
                    ? 'border-green-500 bg-green-50 shadow-md'
                    : 'border-gray-200 hover:border-green-300 bg-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: flow.color }} />
                  <span className="font-semibold text-sm text-gray-800">{flow.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Flowchart Display */}
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold" style={{ color: flowcharts[selectedFlow].color }}>
              {flowcharts[selectedFlow].title}
            </h3>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Download className="w-4 h-4" />
              <span className="text-sm font-semibold">Export</span>
            </button>
          </div>

          <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50 overflow-x-auto">
            {flowcharts[selectedFlow].svg}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Flowchart Legend:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-10 rounded-full bg-green-600 border-2 border-green-800"></div>
              <span className="text-sm text-gray-700">Start/End</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-16 h-10 rounded bg-blue-500 border-2 border-blue-700"></div>
              <span className="text-sm text-gray-700">Process</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-yellow-500 border-2 border-yellow-700 transform rotate-45"></div>
              <span className="text-sm text-gray-700 ml-2">Decision</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-16 h-10 rounded bg-purple-600 border-2 border-purple-800"></div>
              <span className="text-sm text-gray-700">Input/Form</span>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="mt-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg shadow-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-3">📋 Implementation Notes:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              • <strong>Decision Points:</strong> Yellow diamonds indicate user choices or system
              validations
            </li>
            <li>
              • <strong>Process Blocks:</strong> Blue rectangles show actions or screens
            </li>
            <li>
              • <strong>Input Forms:</strong> Purple blocks indicate data entry points
            </li>
            <li>
              • <strong>Success States:</strong> Green blocks show successful completions
            </li>
            <li>
              • <strong>Error States:</strong> Red blocks indicate failures or errors
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>
            💡 These flowcharts should be used alongside wireframes and technical documentation.
          </p>
          <p className="mt-2">Version 1.0 | November 2025 | My Forest Development Team</p>
        </div>
      </div>
    </div>
  );
};

export default FlowchartViewer;
