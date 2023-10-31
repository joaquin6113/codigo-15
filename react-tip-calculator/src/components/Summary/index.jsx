export default function Summary({ first, second, onDoneClick, onResetClick }) {
    return (
        <>
          <div className="bg-[#00494d] rounded-xl text-white p-5 my-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Tip Amount</h3>
                <p className="text-gray-300">/ person</p>
              </div>
              <div>
                <h4 id="tip-amount" className="text-3xl text-green-200 font-semibold">{first}</h4>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Total</h3>
                <p className="text-gray-300">/ person</p>
              </div>
              <div>
                <h4 id="total" className="text-3xl text-green-200 font-semibold">{second}</h4>
              </div>
            </div>
            <div className="mt-10 text-center grid grid-cols-2 gap-5">
              <button 
              id="button"
              className="w-full text-green-950 bg-green-100 p-3 rounded-md font-semibold text-xl"
              onClick={onDoneClick}>
              Done</button>
              <button
              id="second-button"
              className="w-full text-green-950 bg-green-100 p-3 rounded-md font-semibold text-xl"
              onClick={onResetClick}>
              Reset</button>
            </div>
          </div>
        </>
    )
}