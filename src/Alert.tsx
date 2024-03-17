import { Tokens } from "marked";

export const Alert = (props: Tokens.Generic) => {
  return (
    <span className="flex">
      { props.raw === "[!NOTE]" && <><NoteIcon /><span className="font-bold text-blue-400 m-1">{props.text}</span></> }
      { props.raw === "[!TIP]" && <><LampChargeIcon /><span className="font-bold text-green-400 m-1">{props.text}</span></> }
      { props.raw === "[!IMPORTANT]" && <><ImportantIcon /><span className="font-bold text-purple-400 m-1">{props.text}</span></> }
      { props.raw === "[!WARNING]" && <><WarningIcon /><span className="font-bold text-orange-400 m-1">{props.text}</span></> }
      { props.raw === "[!CAUTION]" && <><Warning2Icon /><span className="font-bold text-red-400 m-1">{props.text}</span></> }
    </span>
  )
}

const NoteIcon = () => {
  return (
    <svg className="w-6 h-6 text-blue-400 m-1"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="1.5"
         strokeLinecap="round"
         strokeLinejoin="round"
    >
      <path d="M20 8.25V18C20 21 18.21 22 16 22H8C5.79 22 4 21 4 18V8.25C4 5 5.79 4.25 8 4.25C8 4.87 8.24997 5.43 8.65997 5.84C9.06997 6.25 9.63 6.5 10.25 6.5H13.75C14.99 6.5 16 5.49 16 4.25C18.21 4.25 20 5 20 8.25Z"/>
      <path d="M16 4.25C16 5.49 14.99 6.5 13.75 6.5H10.25C9.63 6.5 9.06997 6.25 8.65997 5.84C8.24997 5.43 8 4.87 8 4.25C8 3.01 9.01 2 10.25 2H13.75C14.37 2 14.93 2.25 15.34 2.66C15.75 3.07 16 3.63 16 4.25Z"/>
      <path d="M8 13H12"/>
      <path d="M8 17H16"/>
    </svg>
  );
}

// https://www.svgrepo.com/svg/497219/lamp-charge
const LampChargeIcon = () => {
  return (
    <svg className="w-6 h-6 text-green-400 m-1"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="1.5"
         strokeLinecap="round"
         strokeLinejoin="round"
    >
      <path d="M12.0001 7.88989L10.9301 9.74989C10.6901 10.1599 10.8901 10.4999 11.3601 10.4999H12.6301C13.1101 10.4999 13.3001 10.8399 13.0601 11.2499L12.0001 13.1099"/>
      <path d="M8.30011 18.0399V16.8799C6.00011 15.4899 4.11011 12.7799 4.11011 9.89993C4.11011 4.94993 8.66011 1.06993 13.8001 2.18993C16.0601 2.68993 18.0401 4.18993 19.0701 6.25993C21.1601 10.4599 18.9601 14.9199 15.7301 16.8699V18.0299C15.7301 18.3199 15.8401 18.9899 14.7701 18.9899H9.26011C8.16011 18.9999 8.30011 18.5699 8.30011 18.0399Z"/>
      <path d="M8.5 22C10.79 21.35 13.21 21.35 15.5 22"/>
    </svg>
  );
}

// https://www.svgrepo.com/show/489221/warning.svg
const WarningIcon = () => {
  return (
    <svg className="w-6 h-6 text-orange-400 m-1"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="1.5"
         strokeLinecap="round"
         strokeLinejoin="round"
    >
      <path d="M12 15H12.01M12 12V9M4.98207 19H19.0179C20.5615 19 21.5233 17.3256 20.7455 15.9923L13.7276 3.96153C12.9558 2.63852 11.0442 2.63852 10.2724 3.96153L3.25452 15.9923C2.47675 17.3256 3.43849 19 4.98207 19Z" />
    </svg>
  );
}

// https://www.svgrepo.com/svg/497665/warning-2
const Warning2Icon = () => {
  return (
    <svg className="w-6 h-6 text-red-400 m-1"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="1.5"
         strokeLinecap="round"
         strokeLinejoin="round"
    >
      <path d="M12 7.75V13"/>
      <path d="M21.08 8.58003V15.42C21.08 16.54 20.48 17.58 19.51 18.15L13.57 21.58C12.6 22.14 11.4 22.14 10.42 21.58L4.47998 18.15C3.50998 17.59 2.90997 16.55 2.90997 15.42V8.58003C2.90997 7.46003 3.50998 6.41999 4.47998 5.84999L10.42 2.42C11.39 1.86 12.59 1.86 13.57 2.42L19.51 5.84999C20.48 6.41999 21.08 7.45003 21.08 8.58003Z"/>
      <path d="M12 16.2V16.2999"/>
    </svg>
  );
}


const ImportantIcon = () => {
  return (
    <svg className="w-6 h-6 text-purple-400 m-1"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="1.5"
         strokeLinecap="round"
         strokeLinejoin="round"
    >
      <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"/>
      <path d="M12 8V13"/>
      <path d="M11.9945 16H12.0035"/>
    </svg>
  );
}
