import { useState } from 'react'
import { Card, ItemPercentage, Header, Summary, TextField, Title } from './components'

export default function App() {
  const [percentages, setPercentages] = useState([
    {
      value: "5%",
      isActive: false,
    },
    {
      value: "10%",
      isActive: false,
    },
    {
      value: "15%",
      isActive: false,
    },
    {
      value: "25%",
      isActive: false,
    },
    {
      value: "50%",
      isActive: false,
    },
  ])

  const [customValue, setCustomValue] = useState("")
  const [billValue, setBillValue] = useState("")
  const [peopleValue, setPeopleValue] = useState("")
  const [valuePercentage, setValuePercentage] = useState(0)

  const [total, setTotal] = useState({
    tip: "$0.00",
    total: "$0.00",
  })

  const handleMapPercentage = (value) => {
    return percentages.map((percentage) => {
      return {
        value: percentage.value,
        isActive: !percentage.isActive && percentage.value === value
      }
    })
  }

  const handlePercentageActive = (value) => {
    setPercentages(handleMapPercentage(value))
    setCustomValue("")
    setValuePercentage(Number(value.replace("%", "")))
  }

  const handleInputOnChange = (e) => {
    setPercentages(handleMapPercentage())
    setCustomValue(e.target.value)
    setValuePercentage(Number(e.target.value))
  }
  const handleInputBillOnChange = (e) => setBillValue(e.target.value)
  const handleInputPeopleOnChange = (e) => {
    const inputPeople = e.target.value
    setPeopleValue(inputPeople)
  }

  const onDoneClick = () => {
    if (!valuePercentage || !billValue) {
      return
    }

    let inputPeople = peopleValue
    if (!inputPeople) {
      inputPeople = 1
    }                    

    const bill = Number(billValue)
    const totalTip = (bill * valuePercentage / 100) / Number(inputPeople)
    const totalPerPerson = (bill + bill * valuePercentage / 100) / Number(inputPeople)

    setTotal({tip: `$${totalTip.toFixed(2)}`, total: `$${totalPerPerson.toFixed(2)}`})
  }

  const onResetClick = () => {
    setBillValue("")
    setPercentages(handleMapPercentage())
    setCustomValue("")
    setValuePercentage(0)
    setPeopleValue("")
    setTotal({tip: "$0.00", total: "$0.00"})
  }
  
  return (
    <>
      <main className='h-screen bg-green-100'>
        <Header/>
        <Card>
          <Title title={"Bill"}/>
            <TextField 
            icon={"dollar"} 
            name={"input-bill"} 
            placeholder={"0.00"}
            value={billValue}
            onChange={handleInputBillOnChange}/>
          <Title title={"Select tip %"}/>
          <div className="grid grid-cols-2 gap-3 mt-3">
            {percentages.map((percentage) => (
              <ItemPercentage 
              key={percentage.value} 
              per={percentage.value} 
              isActive={percentage.isActive}
              onClick={handlePercentageActive}/>
            ))}
            <TextField 
            icon={""} 
            name={"input-custom"} 
            placeholder={"Custom"} 
            value={customValue}
            onChange={handleInputOnChange}/>
          </div>
          <Title title={"Number of People"}/>
          <TextField 
          icon={"people"} 
          name={"input-people"} 
          placeholder={"0"}
          value={peopleValue}
          onChange={handleInputPeopleOnChange}
          />
          <Summary 
          first={total.tip} 
          second={total.total}
          onDoneClick={onDoneClick}
          onResetClick={onResetClick}/>
        </Card>
      </main>
    </>
  )
}