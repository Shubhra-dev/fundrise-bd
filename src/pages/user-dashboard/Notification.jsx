import { RxCross2 } from 'react-icons/rx';
import { RiCircleFill } from 'react-icons/ri';
import { useEffect, useState, useRef } from 'react';
import BodySmall from '@/components/text/BodySmall';
import SubHeading from '@/components/text/SubHeading';
import { getNotification } from '@/services/notification';
function Notification({ setNotificationIsOpen }) {
  const [notification, setNotification] = useState({
    data: null,
    isLoding: false,
    isError: false,
  });
  const notificationRef = useRef(null);
  useEffect(() => {
    async function fetchNotification() {
      setNotification({ data: null, isLoading: true, isError: false });
      try {
        const result = await getNotification();
        setNotification({
          data: result,
          isLoading: false,
          isError: false,
        });
      } catch (error) {
        setNotification({ data: null, isLoading: false, isError: true });
      }
    }
    fetchNotification();
  }, []);
  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setNotificationIsOpen]);
  return (
    <div
      ref={notificationRef}
      className="absolute w-4/5 sm:w-2/4 tab:w-1/3 bg-white z-50 border border-gray-300 p-[10px] shadow-gray-300 rounded-md top-2 right-[40px] tab:right-[75px] h-[90vh]"
    >
      <div className="flex justify-between items-center px-[10px]">
        <SubHeading extraClass={`py-0`}>Notifications</SubHeading>
        <RxCross2
          className="text-red-600 font-bold text-2xl"
          onClick={() => setNotificationIsOpen(false)}
        />
      </div>
      <div className="h-[90%] pt-2 overflow-y-scroll">
        {notification.isLoading && (
          <div className="flex justify-center items-center h-[80%]">
            <BodySmall align={`text-center`} color={`textColor3`}>
              Loading..
            </BodySmall>
          </div>
        )}
        {notification.isError && (
          <div className="flex justify-center items-center h-[80%]">
            <BodySmall align={`text-center`} color={`textColor3`}>
              Something went wrong!
            </BodySmall>
          </div>
        )}
        {notification.data &&
          notification.data.result.notifications.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-left gap-4 border-b border-textColor3"
            >
              <div className="p-[10px] w-5/6">
                <BodySmall
                  font={`font-semibold`}
                  color={`${!item.read_at ? 'textColor4' : 'textColor3'}`}
                >
                  {item.title}
                </BodySmall>
                <h6
                  className={`${
                    !item.read_at ? 'font-semibold text-textColor4' : 'font-normal text-textColor3'
                  } text-[11px]`}
                >
                  {item.details}
                </h6>
                <h6
                  className={`${
                    !item.read_at ? 'font-semibold' : 'font-normal'
                  } text-[11px] text-textColor3`}
                >
                  {item.date}
                </h6>
              </div>
              {!item.read_at && <RiCircleFill className="text-xs text-accent" />}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Notification;
