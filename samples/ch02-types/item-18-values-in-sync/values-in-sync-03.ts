interface ScatterProps {
  // The data
  xs: number[];
  ys: number[];

  // Display
  xRange: [number, number];
  yRange: [number, number];
  color: string;

  // Events
  onClick: (x: number, y: number, index: number) => void;
}
//누라적인 경우가 생길 수 있습니다.
//2번에서 마찬가지인데?
//객체에 키가 추가되었을 경우에 누락된다고한다.
//새로운 프로퍼티가 추가가되면 일일히 추가를 해야하기 때문에 대응하기가 힘들다.
function shouldUpdate(oldProps: ScatterProps, newProps: ScatterProps) {
  return (
    oldProps.xs !== newProps.xs ||
    oldProps.ys !== newProps.ys ||
    oldProps.xRange !== newProps.xRange ||
    oldProps.yRange !== newProps.yRange ||
    oldProps.color !== newProps.color
    // (no check for onClick)
  );
}
