import Glyph from "./glyph";

export default function LetterExpositor({ values, facePart }: any) {
  const valueLength = values ? values.length : 1;
  const totalRows = Math.ceil(valueLength / 4);
  let actualRow = 1;
  return (
    <table className="aspect-square w-full table-fixed">
      <tbody className="aspect-square">
        {Array.from({ length: totalRows }).map((_, rowIndex) => {
          return (
            <tr key={rowIndex} className="">
              {Array.from({ length: 4 }).map((_, colIndex) => {
                const letter =  values[actualRow * colIndex + (rowIndex * 4)] || ' ';
                return <Glyph key={letter} letter={letter} facePart={facePart}/>
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
