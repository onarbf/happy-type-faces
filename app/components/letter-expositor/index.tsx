export default function LetterExpositor({ rows, values }: any) {
  const valueLength = values ? values.length : 1;
  const totalRows = Math.floor(valueLength / 4);
  let actualRow = 1;
  return (
    <table className="w-full table-fixed border-collapse border">
      <tbody className="w-full border-collapse border">
        {Array.from({ length: totalRows }).map((_, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {Array.from({ length: 4 }).map((_, colIndex) => (
                <td key={colIndex} className="border border-pinky p-4 text-center">
                  <span>{values[actualRow * colIndex + (rowIndex * 4)]}</span>
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
