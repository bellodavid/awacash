import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from 'react-native-svg';

import { pallets } from 'constant';

interface Props extends SvgProps {
  name: LogoName;
  size?: `${number}%`;
  onPress?: () => void;
}

type Logo = {
  [key in LogoName]: JSX.Element;
};

export default function Logo({
  name,
  onPress,
  size = '75%',
  ...props
}: Props): JSX.Element {
  const LogoMap: Logo = {
    logo: (
      <>
        <G clipPath="url(#clip0_1_107)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.4264 2.38532C2.03013 2.38532 2.5195 2.8887 2.5195 3.50965C2.5195 4.13062 2.03013 4.63398 1.4264 4.63398C0.822713 4.63398 0.333313 4.13062 0.333313 3.50965C0.333313 2.8887 0.822713 2.38532 1.4264 2.38532Z"
            fill={pallets.primary}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.82755 1.28348C4.43126 1.28348 4.92065 1.78685 4.92065 2.40781C4.92065 3.02874 4.43126 3.53214 3.82755 3.53214C3.22386 3.53214 2.73445 3.02874 2.73445 2.40781C2.73445 1.78685 3.22386 1.28348 3.82755 1.28348Z"
            fill={pallets.primary}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.60893 4.00433C4.21265 4.00433 4.70203 4.50773 4.70203 5.12866C4.70203 5.74962 4.21265 6.25299 3.60893 6.25299C3.00525 6.25299 2.51583 5.74962 2.51583 5.12866C2.51583 4.50773 3.00525 4.00433 3.60893 4.00433Z"
            fill={pallets.secondary}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.09391 2.95498C6.6976 2.95498 7.18701 3.45834 7.18701 4.07931C7.18701 4.70024 6.6976 5.20364 6.09391 5.20364C5.49021 5.20364 5.00081 4.70024 5.00081 4.07931C5.00081 3.45834 5.49021 2.95498 6.09391 2.95498Z"
            fill={pallets.secondary}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.23966 0.166656C6.84336 0.166656 7.33276 0.670023 7.33276 1.29099C7.33276 1.91192 6.84336 2.41532 6.23966 2.41532C5.63595 2.41532 5.14656 1.91192 5.14656 1.29099C5.14656 0.670023 5.63595 0.166656 6.23966 0.166656Z"
            fill={pallets.primary}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.89811 5.55966C6.60241 5.55966 7.17336 6.14693 7.17336 6.87135C7.17336 7.59581 6.60241 8.18308 5.89811 8.18308C5.19378 8.18308 4.62281 7.59581 4.62281 6.87135C4.62281 6.14693 5.19378 5.55966 5.89811 5.55966Z"
            fill={pallets.secondary}
          />
          <Path
            d="M11.9303 2.31288H13.2028V7.53828H11.9303V6.98229C11.6815 7.22501 11.4312 7.39886 11.1809 7.50549C10.9305 7.61208 10.6578 7.66622 10.366 7.66622C9.7075 7.66622 9.13983 7.40544 8.65987 6.88224C8.17992 6.36067 7.94073 5.7112 7.94073 4.93541C7.94073 4.13013 8.17353 3.4708 8.63755 2.95581C9.10155 2.44245 9.66443 2.18495 10.3278 2.18495C10.6339 2.18495 10.9194 2.24402 11.1872 2.36044C11.4551 2.47689 11.7023 2.65404 11.9303 2.88695V2.31288ZM10.5893 3.38551C10.1938 3.38551 9.86535 3.52821 9.60545 3.81523C9.34395 4.10061 9.21318 4.46798 9.21318 4.91575C9.21318 5.36678 9.34552 5.73744 9.61182 6.02939C9.87812 6.31968 10.205 6.46565 10.5941 6.46565C10.9943 6.46565 11.3276 6.32296 11.5907 6.03593C11.8553 5.75056 11.9877 5.37497 11.9877 4.91083C11.9877 4.45653 11.8553 4.08914 11.5907 3.80702C11.3276 3.52656 10.9927 3.38551 10.5893 3.38551Z"
            fill={pallets.primary}
          />
          <Path
            d="M13.9267 2.31288H15.1641L16.1942 5.28641L17.2944 2.31288H18.0614L19.1409 5.25197L20.1646 2.31288H21.4083L19.5698 7.53828H18.7614L17.6675 4.55985L16.5545 7.53828H15.7541L13.9267 2.31288Z"
            fill={pallets.primary}
          />
          <Path
            d="M25.8986 2.31288H27.1711V7.53828H25.8986V6.98229C25.6499 7.22501 25.3995 7.39886 25.1492 7.50549C24.8989 7.61208 24.6262 7.66622 24.3344 7.66622C23.6759 7.66622 23.1082 7.40544 22.6282 6.88224C22.1483 6.36067 21.9091 5.7112 21.9091 4.93541C21.9091 4.13013 22.1419 3.4708 22.6059 2.95581C23.0699 2.44245 23.6328 2.18495 24.2961 2.18495C24.6023 2.18495 24.8877 2.24402 25.1556 2.36044C25.4235 2.47689 25.6706 2.65404 25.8986 2.88695V2.31288ZM24.5576 3.38551C24.1622 3.38551 23.8337 3.52821 23.5738 3.81523C23.3123 4.10061 23.1815 4.46798 23.1815 4.91575C23.1815 5.36678 23.3139 5.73744 23.5802 6.02939C23.8465 6.31968 24.1734 6.46565 24.5624 6.46565C24.9626 6.46565 25.2959 6.32296 25.559 6.03593C25.8237 5.75056 25.956 5.37497 25.956 4.91083C25.956 4.45653 25.8237 4.08914 25.559 3.80702C25.2959 3.52656 24.9611 3.38551 24.5576 3.38551Z"
            fill={pallets.primary}
          />
          <Path
            d="M33.4297 3.37569L32.3694 3.97596C32.17 3.76111 31.9739 3.61349 31.7794 3.52987C31.5848 3.44621 31.3568 3.40521 31.0953 3.40521C30.6185 3.40521 30.2327 3.55118 29.9393 3.84148C29.6443 4.13342 29.4976 4.50571 29.4976 4.96166C29.4976 5.40449 29.6395 5.76532 29.9217 6.04577C30.2056 6.32623 30.5771 6.46565 31.0379 6.46565C31.6072 6.46565 32.0505 6.26556 32.3694 5.86538L33.3723 6.57389C32.827 7.30209 32.0584 7.66622 31.065 7.66622C30.1705 7.66622 29.4705 7.39396 28.965 6.85108C28.4595 6.3082 28.206 5.67348 28.206 4.94527C28.206 4.44011 28.3288 3.97596 28.5743 3.55118C28.8215 3.12638 29.1643 2.7918 29.606 2.54908C30.0461 2.30634 30.5388 2.18495 31.0842 2.18495C31.5896 2.18495 32.0425 2.2883 32.4443 2.49494C32.8461 2.7016 33.1746 2.99519 33.4297 3.37569Z"
            fill={pallets.secondary}
          />
          <Path
            d="M38.3394 2.31288H39.6119V7.53828H38.3394V6.98229C38.0906 7.22501 37.8403 7.39886 37.59 7.50549C37.3396 7.61208 37.0669 7.66622 36.7751 7.66622C36.1166 7.66622 35.5489 7.40544 35.069 6.88224C34.589 6.36067 34.3498 5.7112 34.3498 4.93541C34.3498 4.13013 34.5826 3.4708 35.0467 2.95581C35.5107 2.44245 36.0735 2.18495 36.7369 2.18495C37.043 2.18495 37.3285 2.24402 37.5963 2.36044C37.8642 2.47689 38.1114 2.65404 38.3394 2.88695V2.31288ZM36.9984 3.38551C36.6029 3.38551 36.2745 3.52821 36.0146 3.81523C35.753 4.10061 35.6223 4.46798 35.6223 4.91575C35.6223 5.36678 35.7546 5.73744 36.0209 6.02939C36.2872 6.31968 36.6141 6.46565 37.0032 6.46565C37.4034 6.46565 37.7367 6.32296 37.9998 6.03593C38.2644 5.75056 38.3968 5.37497 38.3968 4.91083C38.3968 4.45653 38.2644 4.08914 37.9998 3.80702C37.7367 3.52656 37.4018 3.38551 36.9984 3.38551Z"
            fill={pallets.secondary}
          />
          <Path
            d="M44.0049 3.05258L43.2172 3.86771C42.8982 3.53969 42.608 3.37569 42.3465 3.37569C42.2046 3.37569 42.093 3.40684 42.0117 3.46917C41.9303 3.53148 41.8905 3.60856 41.8905 3.70043C41.8905 3.77095 41.916 3.83491 41.967 3.89395C42.0181 3.95299 42.1456 4.03337 42.3481 4.13669L42.8137 4.37615C43.3049 4.62381 43.6429 4.87802 43.8263 5.13552C44.0097 5.39467 44.1006 5.69644 44.1006 6.04415C44.1006 6.50664 43.9347 6.89369 43.603 7.20206C43.2714 7.51204 42.8265 7.66622 42.2684 7.66622C41.5285 7.66622 40.9354 7.36934 40.4936 6.77397L41.2798 5.8949C41.4297 6.07367 41.6051 6.21964 41.8076 6.32951C42.0085 6.43941 42.1871 6.49517 42.3433 6.49517C42.5108 6.49517 42.6479 6.45417 42.75 6.37051C42.8536 6.28687 42.9046 6.19175 42.9046 6.08349C42.9046 5.88177 42.7197 5.68495 42.3481 5.4947L41.9192 5.27328C41.0964 4.84852 40.685 4.31711 40.685 3.67912C40.685 3.26745 40.8397 2.9148 41.149 2.62286C41.4584 2.33092 41.8538 2.18495 42.3354 2.18495C42.6654 2.18495 42.9748 2.26041 43.2666 2.40966C43.5568 2.5589 43.8024 2.77377 44.0049 3.05258Z"
            fill={pallets.secondary}
          />
          <Path
            d="M45.1147 0.295563H46.3872V2.84757C46.6359 2.62615 46.8847 2.46052 47.1366 2.35061C47.387 2.24071 47.6421 2.18495 47.8988 2.18495C48.4011 2.18495 48.8252 2.36375 49.1697 2.72291C49.4647 3.03288 49.6113 3.48883 49.6113 4.08914V7.53828H48.358V5.25033C48.358 4.64678 48.3309 4.23672 48.2751 4.02352C48.2193 3.80867 48.1236 3.64956 47.9881 3.54297C47.8542 3.438 47.6867 3.38551 47.489 3.38551C47.2323 3.38551 47.0106 3.47407 46.8257 3.64956C46.6423 3.82509 46.5147 4.06452 46.443 4.36793C46.4063 4.52539 46.3872 4.88292 46.3872 5.44223V7.53828H45.1147V0.295563Z"
            fill={pallets.secondary}
          />
        </G>
        <Defs>
          <ClipPath id="clip0_1_107">
            <Rect width={50} height={8.33333} fill={pallets.white} />
          </ClipPath>
        </Defs>
      </>
    ),
    logoBlack: (
      <>
        <G clipPath="url(#clip0_9_144)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.4264 2.38534C2.03013 2.38534 2.5195 2.88872 2.5195 3.50967C2.5195 4.13063 2.03013 4.634 1.4264 4.634C0.822713 4.634 0.333313 4.13063 0.333313 3.50967C0.333313 2.88872 0.822713 2.38534 1.4264 2.38534Z"
            fill={pallets.black}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.82755 1.2835C4.43126 1.2835 4.92065 1.78686 4.92065 2.40783C4.92065 3.02876 4.43126 3.53216 3.82755 3.53216C3.22386 3.53216 2.73445 3.02876 2.73445 2.40783C2.73445 1.78686 3.22386 1.2835 3.82755 1.2835Z"
            fill={pallets.black}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.60893 4.00434C4.21265 4.00434 4.70203 4.50774 4.70203 5.12867C4.70203 5.74964 4.21265 6.25301 3.60893 6.25301C3.00525 6.25301 2.51583 5.74964 2.51583 5.12867C2.51583 4.50774 3.00525 4.00434 3.60893 4.00434Z"
            fill={pallets.black}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.09391 2.95499C6.6976 2.95499 7.18701 3.45836 7.18701 4.07932C7.18701 4.70025 6.6976 5.20366 6.09391 5.20366C5.49021 5.20366 5.00081 4.70025 5.00081 4.07932C5.00081 3.45836 5.49021 2.95499 6.09391 2.95499Z"
            fill={pallets.black}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.23966 0.166672C6.84336 0.166672 7.33276 0.670038 7.33276 1.291C7.33276 1.91194 6.84336 2.41533 6.23966 2.41533C5.63595 2.41533 5.14656 1.91194 5.14656 1.291C5.14656 0.670038 5.63595 0.166672 6.23966 0.166672Z"
            fill={pallets.black}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.89811 5.55968C6.60241 5.55968 7.17336 6.14694 7.17336 6.87136C7.17336 7.59582 6.60241 8.1831 5.89811 8.1831C5.19378 8.1831 4.62281 7.59582 4.62281 6.87136C4.62281 6.14694 5.19378 5.55968 5.89811 5.55968Z"
            fill={pallets.black}
          />
          <Path
            d="M11.9303 2.31287H13.2028V7.53827H11.9303V6.98227C11.6815 7.225 11.4312 7.39884 11.1809 7.50547C10.9305 7.61207 10.6578 7.66621 10.366 7.66621C9.7075 7.66621 9.13983 7.40543 8.65987 6.88223C8.17992 6.36066 7.94073 5.71118 7.94073 4.9354C7.94073 4.13011 8.17353 3.47078 8.63755 2.95579C9.10155 2.44243 9.66443 2.18493 10.3278 2.18493C10.6339 2.18493 10.9194 2.24401 11.1872 2.36042C11.4551 2.47687 11.7023 2.65403 11.9303 2.88693V2.31287ZM10.5893 3.3855C10.1938 3.3855 9.86535 3.52819 9.60545 3.81522C9.34395 4.10059 9.21318 4.46796 9.21318 4.91574C9.21318 5.36676 9.34552 5.73743 9.61182 6.02937C9.87812 6.31967 10.205 6.46564 10.5941 6.46564C10.9943 6.46564 11.3276 6.32294 11.5907 6.03592C11.8553 5.75054 11.9877 5.37496 11.9877 4.91082C11.9877 4.45651 11.8553 4.08913 11.5907 3.80701C11.3276 3.52655 10.9927 3.3855 10.5893 3.3855Z"
            fill={pallets.black}
          />
          <Path
            d="M13.9267 2.31287H15.1641L16.1942 5.2864L17.2944 2.31287H18.0614L19.1409 5.25196L20.1646 2.31287H21.4083L19.5698 7.53827H18.7614L17.6675 4.55983L16.5545 7.53827H15.7541L13.9267 2.31287Z"
            fill={pallets.black}
          />
          <Path
            d="M25.8986 2.31287H27.1711V7.53827H25.8986V6.98227C25.6499 7.225 25.3995 7.39884 25.1492 7.50547C24.8989 7.61207 24.6262 7.66621 24.3344 7.66621C23.6759 7.66621 23.1082 7.40543 22.6282 6.88223C22.1483 6.36066 21.9091 5.71118 21.9091 4.9354C21.9091 4.13011 22.1419 3.47078 22.6059 2.95579C23.0699 2.44243 23.6328 2.18493 24.2961 2.18493C24.6023 2.18493 24.8877 2.24401 25.1556 2.36042C25.4235 2.47687 25.6706 2.65403 25.8986 2.88693V2.31287ZM24.5576 3.3855C24.1622 3.3855 23.8337 3.52819 23.5738 3.81522C23.3123 4.10059 23.1815 4.46796 23.1815 4.91574C23.1815 5.36676 23.3139 5.73743 23.5802 6.02937C23.8465 6.31967 24.1734 6.46564 24.5624 6.46564C24.9626 6.46564 25.2959 6.32294 25.559 6.03592C25.8237 5.75054 25.956 5.37496 25.956 4.91082C25.956 4.45651 25.8237 4.08913 25.559 3.80701C25.2959 3.52655 24.9611 3.3855 24.5576 3.3855Z"
            fill={pallets.black}
          />
          <Path
            d="M33.4297 3.37567L32.3694 3.97595C32.17 3.7611 31.9739 3.61348 31.7794 3.52986C31.5848 3.4462 31.3568 3.40519 31.0953 3.40519C30.6185 3.40519 30.2327 3.55116 29.9393 3.84146C29.6443 4.1334 29.4976 4.5057 29.4976 4.96165C29.4976 5.40448 29.6395 5.7653 29.9217 6.04576C30.2056 6.32622 30.5771 6.46564 31.0379 6.46564C31.6072 6.46564 32.0505 6.26555 32.3694 5.86537L33.3723 6.57388C32.827 7.30207 32.0584 7.66621 31.065 7.66621C30.1705 7.66621 29.4705 7.39394 28.965 6.85106C28.4595 6.30818 28.206 5.67347 28.206 4.94526C28.206 4.44009 28.3288 3.97595 28.5743 3.55117C28.8215 3.12637 29.1643 2.79179 29.606 2.54906C30.0461 2.30632 30.5388 2.18493 31.0842 2.18493C31.5896 2.18493 32.0425 2.28829 32.4443 2.49493C32.8461 2.70158 33.1746 2.99517 33.4297 3.37567Z"
            fill={pallets.black}
          />
          <Path
            d="M38.3394 2.31287H39.6119V7.53827H38.3394V6.98227C38.0906 7.225 37.8403 7.39884 37.59 7.50547C37.3396 7.61207 37.0669 7.66621 36.7751 7.66621C36.1166 7.66621 35.5489 7.40543 35.069 6.88223C34.589 6.36066 34.3498 5.71118 34.3498 4.9354C34.3498 4.13011 34.5826 3.47078 35.0467 2.95579C35.5107 2.44243 36.0735 2.18493 36.7369 2.18493C37.043 2.18493 37.3285 2.24401 37.5963 2.36042C37.8642 2.47687 38.1114 2.65403 38.3394 2.88693V2.31287ZM36.9984 3.3855C36.6029 3.3855 36.2745 3.52819 36.0146 3.81522C35.753 4.10059 35.6223 4.46796 35.6223 4.91574C35.6223 5.36676 35.7546 5.73743 36.0209 6.02937C36.2872 6.31967 36.6141 6.46564 37.0032 6.46564C37.4034 6.46564 37.7367 6.32294 37.9998 6.03592C38.2644 5.75054 38.3968 5.37496 38.3968 4.91082C38.3968 4.45651 38.2644 4.08913 37.9998 3.80701C37.7367 3.52655 37.4018 3.3855 36.9984 3.3855Z"
            fill={pallets.black}
          />
          <Path
            d="M44.0049 3.05257L43.2172 3.86769C42.8982 3.53968 42.608 3.37567 42.3465 3.37567C42.2046 3.37567 42.093 3.40682 42.0117 3.46915C41.9303 3.53147 41.8905 3.60854 41.8905 3.70041C41.8905 3.77094 41.916 3.8349 41.967 3.89394C42.0181 3.95298 42.1456 4.03336 42.3481 4.13668L42.8137 4.37613C43.3049 4.62379 43.6429 4.87801 43.8263 5.13551C44.0097 5.39466 44.1006 5.69642 44.1006 6.04413C44.1006 6.50663 43.9347 6.89368 43.603 7.20204C43.2714 7.51202 42.8265 7.66621 42.2684 7.66621C41.5285 7.66621 40.9354 7.36932 40.4936 6.77395L41.2798 5.89488C41.4297 6.07365 41.6051 6.21962 41.8076 6.32949C42.0085 6.43939 42.1871 6.49516 42.3433 6.49516C42.5108 6.49516 42.6479 6.45415 42.75 6.3705C42.8536 6.28686 42.9046 6.19173 42.9046 6.08347C42.9046 5.88175 42.7197 5.68494 42.3481 5.49468L41.9192 5.27327C41.0964 4.8485 40.685 4.31709 40.685 3.6791C40.685 3.26743 40.8397 2.91479 41.149 2.62285C41.4584 2.3309 41.8538 2.18493 42.3354 2.18493C42.6654 2.18493 42.9748 2.26039 43.2666 2.40964C43.5568 2.55889 43.8024 2.77375 44.0049 3.05257Z"
            fill={pallets.black}
          />
          <Path
            d="M45.1147 0.295547H46.3872V2.84755C46.6359 2.62614 46.8847 2.4605 47.1366 2.3506C47.387 2.2407 47.6421 2.18493 47.8988 2.18493C48.4011 2.18493 48.8252 2.36373 49.1697 2.72289C49.4647 3.03287 49.6113 3.48882 49.6113 4.08913V7.53827H48.358V5.25031C48.358 4.64676 48.3309 4.23671 48.2751 4.0235C48.2193 3.80865 48.1236 3.64955 47.9881 3.54295C47.8542 3.43799 47.6867 3.3855 47.489 3.3855C47.2323 3.3855 47.0106 3.47406 46.8257 3.64955C46.6423 3.82507 46.5147 4.06451 46.443 4.36792C46.4063 4.52538 46.3872 4.88291 46.3872 5.44221V7.53827H45.1147V0.295547Z"
            fill={pallets.black}
          />
        </G>
        <Defs>
          <ClipPath id="clip0_9_144">
            <Rect width={50} height={8.33333} fill={pallets.white} />
          </ClipPath>
        </Defs>
      </>
    ),
    logoWhite: (
      <>
        <G clipPath="url(#clip0_1_110)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.4264 2.38534C2.03013 2.38534 2.5195 2.88872 2.5195 3.50967C2.5195 4.13063 2.03013 4.634 1.4264 4.634C0.822713 4.634 0.333313 4.13063 0.333313 3.50967C0.333313 2.88872 0.822713 2.38534 1.4264 2.38534Z"
            fill={pallets.white}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.82755 1.2835C4.43126 1.2835 4.92065 1.78686 4.92065 2.40783C4.92065 3.02876 4.43126 3.53216 3.82755 3.53216C3.22386 3.53216 2.73445 3.02876 2.73445 2.40783C2.73445 1.78686 3.22386 1.2835 3.82755 1.2835Z"
            fill={pallets.white}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.60893 4.00434C4.21265 4.00434 4.70203 4.50774 4.70203 5.12867C4.70203 5.74964 4.21265 6.25301 3.60893 6.25301C3.00525 6.25301 2.51583 5.74964 2.51583 5.12867C2.51583 4.50774 3.00525 4.00434 3.60893 4.00434Z"
            fill={pallets.white}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.09391 2.95499C6.6976 2.95499 7.18701 3.45836 7.18701 4.07932C7.18701 4.70025 6.6976 5.20366 6.09391 5.20366C5.49021 5.20366 5.00081 4.70025 5.00081 4.07932C5.00081 3.45836 5.49021 2.95499 6.09391 2.95499Z"
            fill={pallets.white}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.23966 0.166672C6.84336 0.166672 7.33276 0.670038 7.33276 1.291C7.33276 1.91194 6.84336 2.41533 6.23966 2.41533C5.63595 2.41533 5.14656 1.91194 5.14656 1.291C5.14656 0.670038 5.63595 0.166672 6.23966 0.166672Z"
            fill={pallets.white}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.89811 5.55968C6.60241 5.55968 7.17336 6.14694 7.17336 6.87136C7.17336 7.59582 6.60241 8.1831 5.89811 8.1831C5.19378 8.1831 4.62281 7.59582 4.62281 6.87136C4.62281 6.14694 5.19378 5.55968 5.89811 5.55968Z"
            fill={pallets.white}
          />
          <Path
            d="M11.9303 2.31287H13.2028V7.53827H11.9303V6.98227C11.6815 7.225 11.4312 7.39884 11.1809 7.50547C10.9305 7.61207 10.6578 7.66621 10.366 7.66621C9.7075 7.66621 9.13983 7.40543 8.65987 6.88223C8.17992 6.36066 7.94073 5.71118 7.94073 4.9354C7.94073 4.13011 8.17353 3.47078 8.63755 2.95579C9.10155 2.44243 9.66443 2.18493 10.3278 2.18493C10.6339 2.18493 10.9194 2.24401 11.1872 2.36042C11.4551 2.47687 11.7023 2.65403 11.9303 2.88693V2.31287ZM10.5893 3.3855C10.1938 3.3855 9.86535 3.52819 9.60545 3.81522C9.34395 4.10059 9.21318 4.46796 9.21318 4.91574C9.21318 5.36676 9.34552 5.73743 9.61182 6.02937C9.87812 6.31967 10.205 6.46564 10.5941 6.46564C10.9943 6.46564 11.3276 6.32294 11.5907 6.03592C11.8553 5.75054 11.9877 5.37496 11.9877 4.91082C11.9877 4.45651 11.8553 4.08913 11.5907 3.80701C11.3276 3.52655 10.9927 3.3855 10.5893 3.3855Z"
            fill={pallets.white}
          />
          <Path
            d="M13.9267 2.31287H15.1641L16.1942 5.2864L17.2944 2.31287H18.0614L19.1409 5.25196L20.1646 2.31287H21.4083L19.5698 7.53827H18.7614L17.6675 4.55983L16.5545 7.53827H15.7541L13.9267 2.31287Z"
            fill={pallets.white}
          />
          <Path
            d="M25.8986 2.31287H27.1711V7.53827H25.8986V6.98227C25.6499 7.225 25.3995 7.39884 25.1492 7.50547C24.8989 7.61207 24.6262 7.66621 24.3344 7.66621C23.6759 7.66621 23.1082 7.40543 22.6282 6.88223C22.1483 6.36066 21.9091 5.71118 21.9091 4.9354C21.9091 4.13011 22.1419 3.47078 22.6059 2.95579C23.0699 2.44243 23.6328 2.18493 24.2961 2.18493C24.6023 2.18493 24.8877 2.24401 25.1556 2.36042C25.4235 2.47687 25.6706 2.65403 25.8986 2.88693V2.31287ZM24.5576 3.3855C24.1622 3.3855 23.8337 3.52819 23.5738 3.81522C23.3123 4.10059 23.1815 4.46796 23.1815 4.91574C23.1815 5.36676 23.3139 5.73743 23.5802 6.02937C23.8465 6.31967 24.1734 6.46564 24.5624 6.46564C24.9626 6.46564 25.2959 6.32294 25.559 6.03592C25.8237 5.75054 25.956 5.37496 25.956 4.91082C25.956 4.45651 25.8237 4.08913 25.559 3.80701C25.2959 3.52655 24.9611 3.3855 24.5576 3.3855Z"
            fill={pallets.white}
          />
          <Path
            d="M33.4297 3.37567L32.3694 3.97595C32.17 3.7611 31.9739 3.61348 31.7794 3.52986C31.5848 3.4462 31.3568 3.40519 31.0953 3.40519C30.6185 3.40519 30.2327 3.55116 29.9393 3.84146C29.6443 4.1334 29.4976 4.5057 29.4976 4.96165C29.4976 5.40448 29.6395 5.7653 29.9217 6.04576C30.2056 6.32622 30.5771 6.46564 31.0379 6.46564C31.6072 6.46564 32.0505 6.26555 32.3694 5.86537L33.3723 6.57388C32.827 7.30207 32.0584 7.66621 31.065 7.66621C30.1705 7.66621 29.4705 7.39394 28.965 6.85106C28.4595 6.30818 28.206 5.67347 28.206 4.94526C28.206 4.44009 28.3288 3.97595 28.5743 3.55117C28.8215 3.12637 29.1643 2.79179 29.606 2.54906C30.0461 2.30632 30.5388 2.18493 31.0842 2.18493C31.5896 2.18493 32.0425 2.28829 32.4443 2.49493C32.8461 2.70158 33.1746 2.99517 33.4297 3.37567Z"
            fill={pallets.white}
          />
          <Path
            d="M38.3394 2.31287H39.6119V7.53827H38.3394V6.98227C38.0906 7.225 37.8403 7.39884 37.59 7.50547C37.3396 7.61207 37.0669 7.66621 36.7751 7.66621C36.1166 7.66621 35.5489 7.40543 35.069 6.88223C34.589 6.36066 34.3498 5.71118 34.3498 4.9354C34.3498 4.13011 34.5826 3.47078 35.0467 2.95579C35.5107 2.44243 36.0735 2.18493 36.7369 2.18493C37.043 2.18493 37.3285 2.24401 37.5963 2.36042C37.8642 2.47687 38.1114 2.65403 38.3394 2.88693V2.31287ZM36.9984 3.3855C36.6029 3.3855 36.2745 3.52819 36.0146 3.81522C35.753 4.10059 35.6223 4.46796 35.6223 4.91574C35.6223 5.36676 35.7546 5.73743 36.0209 6.02937C36.2872 6.31967 36.6141 6.46564 37.0032 6.46564C37.4034 6.46564 37.7367 6.32294 37.9998 6.03592C38.2644 5.75054 38.3968 5.37496 38.3968 4.91082C38.3968 4.45651 38.2644 4.08913 37.9998 3.80701C37.7367 3.52655 37.4018 3.3855 36.9984 3.3855Z"
            fill={pallets.white}
          />
          <Path
            d="M44.0049 3.05257L43.2172 3.86769C42.8982 3.53968 42.608 3.37567 42.3465 3.37567C42.2046 3.37567 42.093 3.40682 42.0117 3.46915C41.9303 3.53147 41.8905 3.60854 41.8905 3.70041C41.8905 3.77094 41.916 3.8349 41.967 3.89394C42.0181 3.95298 42.1456 4.03336 42.3481 4.13668L42.8137 4.37613C43.3049 4.62379 43.6429 4.87801 43.8263 5.13551C44.0097 5.39466 44.1006 5.69642 44.1006 6.04413C44.1006 6.50663 43.9347 6.89368 43.603 7.20204C43.2714 7.51202 42.8265 7.66621 42.2684 7.66621C41.5285 7.66621 40.9354 7.36932 40.4936 6.77395L41.2798 5.89488C41.4297 6.07365 41.6051 6.21962 41.8076 6.32949C42.0085 6.43939 42.1871 6.49516 42.3433 6.49516C42.5108 6.49516 42.6479 6.45415 42.75 6.3705C42.8536 6.28686 42.9046 6.19173 42.9046 6.08347C42.9046 5.88175 42.7197 5.68494 42.3481 5.49468L41.9192 5.27327C41.0964 4.8485 40.685 4.31709 40.685 3.6791C40.685 3.26743 40.8397 2.91479 41.149 2.62285C41.4584 2.3309 41.8538 2.18493 42.3354 2.18493C42.6654 2.18493 42.9748 2.26039 43.2666 2.40964C43.5568 2.55889 43.8024 2.77375 44.0049 3.05257Z"
            fill={pallets.white}
          />
          <Path
            d="M45.1147 0.295547H46.3872V2.84755C46.6359 2.62614 46.8847 2.4605 47.1366 2.3506C47.387 2.2407 47.6421 2.18493 47.8988 2.18493C48.4011 2.18493 48.8252 2.36373 49.1697 2.72289C49.4647 3.03287 49.6113 3.48882 49.6113 4.08913V7.53827H48.358V5.25031C48.358 4.64676 48.3309 4.23671 48.2751 4.0235C48.2193 3.80865 48.1236 3.64955 47.9881 3.54295C47.8542 3.43799 47.6867 3.3855 47.489 3.3855C47.2323 3.3855 47.0106 3.47406 46.8257 3.64955C46.6423 3.82507 46.5147 4.06451 46.443 4.36792C46.4063 4.52538 46.3872 4.88291 46.3872 5.44221V7.53827H45.1147V0.295547Z"
            fill={pallets.white}
          />
        </G>
        <Defs>
          <ClipPath id="clip0_1_110">
            <Rect width={50} height={8.33333} fill={pallets.white} />
          </ClipPath>
        </Defs>
      </>
    ),
  };

  return (
    <Svg
      width={size}
      height={50}
      {...{ onPress }}
      viewBox="0 0 50 9"
      fill="none"
      {...props}>
      {LogoMap[name]}
    </Svg>
  );
}
