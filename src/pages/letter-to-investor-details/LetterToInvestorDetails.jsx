import LetterDetailsHero from './LetterDetailsHero';
import ContentContainer from './ContentContainer';
const blogdata = {
  id: 1,
  title: 'How Writing Online Has Helped Avoid Scammers',
  type: 'Report',
  quarter_year: '2024',
  quarter: 'Q3',
  slug: 'how-writing-online-has-helped-avoid-scammers',
  date: 'Jun 30, 2025',
  image: 'https://admin.investment.abidurrahman.com/assets/images/no_image.png',
  category: {
    name: 'Forge Investment Outlook',
  },
  author: '',
  contents: [
    {
      content_type: 'graph',
      title: 'Line Chart.......',
      data: {
        chart_type: 'line',
        series: [
          {
            name: 'Series 1',
            color: null,
            values: ['10', '20', '30', '40', '50'],
          },
          {
            name: 'Series 2',
            color: null,
            values: ['15', '25', '35', '45', '55'],
          },
          {
            name: 'Series 3',
            color: null,
            values: ['40', '30', '3', '50', '80'],
          },
        ],
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
      },
    },
    {
      content_type: 'text',
      title: 'Details or others name.....',
      data: '<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ol>\r\n\t<li><strong>&ldquo;Don&rsquo;t put all your eggs in one basket.&rdquo;&nbsp;</strong>For starters, it&rsquo;s bold of you to assume I have multiple baskets lying around like some kind of home goods oligarch. But you also assume I have enough eggs to spread out across these alleged baskets? Jesus Christ.</li>\r\n\t<li><strong>&ldquo;People who live in glass houses shouldn&rsquo;t throw stones.&rdquo;</strong>&nbsp;You lost me at people living in houses. Houses they probably own. Likely the result of making a deal with the devil or inheriting generational wealth. Absurd and unrelatable. Next! (But if you happen to have an in with the big guy downstairs&hellip;I&rsquo;m not&nbsp;<em>not&nbsp;</em>interested.)</li>\r\n\t<li><strong>&ldquo;There&rsquo;s no use crying over spilled milk.&rdquo;</strong>&nbsp;Let me get this straight. I lost precious resources that cannot be recovered. Now, I have to get on my hands and knees to scrub lactose off the floor. But I&rsquo;m not allowed to shed a tear in this cursed scenario? Get lost before I give YOU something to cry about.</li>\r\n\t<li><strong>&ldquo;Penny for your thoughts?&rdquo;</strong>&nbsp;While this is the lowest of lowball offers, your instinct to pay for my opinions is correct. Take that instinct, triple it, adjust for inflation, throw in a generous tip, and then come back to me. Even my bargain-bin ideas go for fifty cents these days.</li>\r\n\t<li><strong>&ldquo;Every cloud has a</strong>&hellip;</li>\r\n</ol>\r\n\r\n<h2>&nbsp;</h2>\r\n\r\n<p>Create an account to read&nbsp;the&nbsp;full&nbsp;story.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>The&nbsp;author made this story available to&nbsp;Medium&nbsp;members&nbsp;only.</p>',
    },
    {
      content_type: 'graph',
      title: 'Single Bar Chart',
      data: {
        chart_type: 'bar',
        series: [
          {
            name: 'Buy',
            color: null,
            values: ['10000', '20000', '30000', '40000', '50000'],
          },
          {
            name: 'Sell',
            color: null,
            values: ['12000', '22000', '29000', '42000', '52000'],
          },
        ],
        labels: ['01.01.2025', '01.02.2025', '01.03.2025', '01.04.2025', '01.05.2025'],
      },
    },
    {
      content_type: 'text',
      title: '',
      data: '<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>',
    },
    {
      content_type: 'graph',
      title: '',
      data: {
        chart_type: 'bar_distributed',
        series: [
          {
            name: 'Series 1',
            color: null,
            values: ['20', '30', '40'],
          },
          {
            name: 'Series 2',
            color: null,
            values: ['80', '70', '60'],
          },
        ],
        labels: ['Label 1', 'Label 2', 'Label 3'],
      },
    },
    {
      content_type: 'graph',
      title: '',
      data: {
        chart_type: 'pie',
        series: [
          {
            name: 'Series 1',
            color: null,
            values: ['30000', '50000', '20000'],
          },
        ],
        labels: ['A', 'B', 'C'],
      },
    },
  ],
};

function LetterToInvestorDetails() {
  return (
    <>
      <LetterDetailsHero />
      <ContentContainer contents={blogdata.contents} />
    </>
  );
}

export default LetterToInvestorDetails;
