interface ScatterProps {
  // The data
  xs: number[];
  ys: number[];

  // Display
  xRange: [number, number];
  yRange: [number, number];
  color: string;

  // Events
  //익명함수여서 매번 바뀌기 때문에 무시해도된다.
  onClick: (x: number, y: number, index: number) => void;
}
//차트를 다시그려야하는 이슈가 있음.
//왜 그럴까요?
//이 접근법은 실패에 갇힌 접근법입니다.
//너무 자주 바뀌는 값이 있을 수 있습니다.
function shouldUpdate(oldProps: ScatterProps, newProps: ScatterProps) {
  let k: keyof ScatterProps;
  //얕은복사를 해서
  for (k in oldProps) {
    if (oldProps[k] !== newProps[k]) {
      if (k !== "onClick") return true;
    }
  }
  return false;
}
