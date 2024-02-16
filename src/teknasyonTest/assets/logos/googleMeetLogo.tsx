import { SvgProps } from "@/types/svgType";
import { Path, G, Svg, Defs, Rect, ClipPath } from "react-native-svg";

export const GoogleMeetLogo = (props: SvgProps) => {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 88 72" fill="none">
      <G clip-path="url(#clip0_76_8)">
        <Path d="M49.5 35.9999L58.03 45.7499L69.5 53.0799L71.5 36.0599L69.5 19.4199L57.81 25.8599L49.5 35.9999Z" fill="#00832D" />
        <Path d="M0 51.5V66C0 69.315 2.685 72 6 72H20.5L23.5 61.04L20.5 51.5L10.55 48.5L0 51.5Z" fill="#0066DA" />
        <Path d="M20.5 0L0 20.5L10.55 23.5L20.5 20.5L23.45 11.09L20.5 0Z" fill="#E94235" />
        <Path d="M20.5 20.5H0V51.5H20.5V20.5Z" fill="#2684FC" />
        <Path d="M82.6 8.6799L69.5 19.4199V53.0799L82.66 63.8699C84.63 65.4099 87.51 64.0049 87.51 61.4999V10.9999C87.51 8.4649 84.565 7.0749 82.6 8.6799ZM49.5 35.9999V51.4999H20.5V71.9999H63.5C66.815 71.9999 69.5 69.3149 69.5 65.9999V53.0799L49.5 35.9999Z" fill="#00AC47" />
        <Path d="M63.5 0H20.5V20.5H49.5V36L69.5 19.43V6C69.5 2.685 66.815 0 63.5 0Z" fill="#FFBA00" />
      </G>
      <Defs>
        <ClipPath id="clip0_76_8">
          <Rect width="87.5" height="72" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
