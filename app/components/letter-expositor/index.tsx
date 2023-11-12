export default function LetterExpositor({ type, values }: any) {
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
                
                return (<td key={colIndex} className={`aspect-square border border-pinky ${type === 0 ? 'pl-[10%] pt-[8%] hover:pl-[0] hover:pt-[0]':''} font-happy text-[6rem] leading-[0px] tracking-[0px] hover:bg-pinky  hover:font-libre hover:text-[1rem] hover:tracking-normal hover:text-white`}>
                  <div className="flex h-full w-full items-center justify-center">
                    {letter}
                  </div>
                </td>)
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
