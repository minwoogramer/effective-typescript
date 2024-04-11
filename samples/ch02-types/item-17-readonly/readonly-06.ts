const str = `This is a tagged text.

next line of tagged text more long asdsdsasad

asdasdsadsdsdasdasdsadsadasdsadsadsadasdsadasdasdsa

asdasdasdasdasdsadsadasdasdsadsadsadsadasdsadsadsadsadsa.
`;
//첫번째 방법
//readonly는 shallow이기 때문에 readonly를 사용하면 안에 있는 배열은 readonly가 아닙니다.
function parseTaggedText(lines: string[]): (readonly string[])[] {
  const paragraphs: (readonly string[])[] = [];
  let currPara: string[] = [];

  const addParagraph = () => {
    if (currPara.length) {
      paragraphs.push(currPara); // [ [], [], []]
      currPara.length = 0; // Clear the lines
    }
  };

  for (const line of lines) {
    if (!line) {
      addParagraph();
    } else {
      currPara.push(line);
    }
  }
  addParagraph();
  return paragraphs;
}
//두번째 방법
function parseTaggedText2(lines: string[]): string[][] {
  const paragraphs: string[][] = [];
  let currPara: string[] = [];

  const addParagraph = () => {
    if (currPara.length) {
      paragraphs.push(currPara as string[]); // [ [], [], []]
      currPara.length = 0; // Clear the lines
    }
  };

  for (const line of lines) {
    if (!line) {
      addParagraph();
    } else {
      currPara.push(line);
    }
  }
  addParagraph();
  return paragraphs;
}
