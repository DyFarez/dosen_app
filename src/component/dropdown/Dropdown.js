import "./dropdown.css"
import optionList from "../../json/optionList.json"

const Dropdown = (props) => {
    const {name, setAspect, aspect, setDataJson, keyComp} = props;

    const handleDropdownChange = (valueData) => {
      let value = parseInt(valueData.target.value)
      setDataJson(null)
      switch(keyComp){
        case 'aspek_penilaian_1' :
          switch(name){
            case "Mahasiswa 1":
              aspect[0].aspek_penilaian_1.mahasiswa_1 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 2":
              aspect[0].aspek_penilaian_1.mahasiswa_2 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 3":
              aspect[0].aspek_penilaian_1.mahasiswa_3 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 4":
              aspect[0].aspek_penilaian_1.mahasiswa_4 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 5":
              aspect[0].aspek_penilaian_1.mahasiswa_5 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 6":
              aspect[0].aspek_penilaian_1.mahasiswa_6 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 7":
              aspect[0].aspek_penilaian_1.mahasiswa_7 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 8":
              aspect[0].aspek_penilaian_1.mahasiswa_8 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 9":
              aspect[0].aspek_penilaian_1.mahasiswa_9 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 10":
              aspect[0].aspek_penilaian_1.mahasiswa_10 = value
              setAspect([...aspect])
              break;
          }
          break;
        case 'aspek_penilaian_2' :
          switch(name){
            case "Mahasiswa 1":
              aspect[1].aspek_penilaian_2.mahasiswa_1 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 2":
              aspect[1].aspek_penilaian_2.mahasiswa_2 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 3":
              aspect[1].aspek_penilaian_2.mahasiswa_3 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 4":
              aspect[1].aspek_penilaian_2.mahasiswa_4 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 5":
              aspect[1].aspek_penilaian_2.mahasiswa_5 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 6":
              aspect[1].aspek_penilaian_2.mahasiswa_6 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 7":
              aspect[1].aspek_penilaian_2.mahasiswa_7 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 8":
              aspect[1].aspek_penilaian_2.mahasiswa_8 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 9":
              aspect[1].aspek_penilaian_2.mahasiswa_9 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 10":
              aspect[1].aspek_penilaian_2.mahasiswa_10 = value
              setAspect([...aspect])
              break;
          }
          break;
        case 'aspek_penilaian_3' :
          switch(name){
            case "Mahasiswa 1":
              aspect[2].aspek_penilaian_3.mahasiswa_1 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 2":
              aspect[2].aspek_penilaian_3.mahasiswa_2 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 3":
              aspect[2].aspek_penilaian_3.mahasiswa_3 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 4":
              aspect[2].aspek_penilaian_3.mahasiswa_4 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 5":
              aspect[2].aspek_penilaian_3.mahasiswa_5 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 6":
              aspect[2].aspek_penilaian_3.mahasiswa_6 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 7":
              aspect[2].aspek_penilaian_3.mahasiswa_7 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 8":
              aspect[2].aspek_penilaian_3.mahasiswa_8 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 9":
              aspect[2].aspek_penilaian_3.mahasiswa_9 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 10":
              aspect[2].aspek_penilaian_3.mahasiswa_10 = value
              setAspect([...aspect])
              break;
              }
              break;
        case 'aspek_penilaian_4' :
          switch(name){
            case "Mahasiswa 1":
              aspect[3].aspek_penilaian_4.mahasiswa_1 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 2":
              aspect[3].aspek_penilaian_4.mahasiswa_2 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 3":
              aspect[3].aspek_penilaian_4.mahasiswa_3 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 4":
              aspect[3].aspek_penilaian_4.mahasiswa_4 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 5":
              aspect[3].aspek_penilaian_4.mahasiswa_5 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 6":
              aspect[3].aspek_penilaian_4.mahasiswa_6 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 7":
              aspect[3].aspek_penilaian_4.mahasiswa_7 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 8":
              aspect[3].aspek_penilaian_4.mahasiswa_8 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 9":
              aspect[3].aspek_penilaian_4.mahasiswa_9 = value
              setAspect([...aspect])
              break;
            case "Mahasiswa 10":
              aspect[3].aspek_penilaian_4.mahasiswa_10 = value
              setAspect([...aspect])
              break;
          }
          break;
      }
    }

    const insertData = (keyTemp, valueData) => {
      switch(name){
        case "Mahasiswa 1":
          setAspect({...aspect,  })
          break;
      } 
    }
    return(
        <select className="dropdown" onChange={(value)=>handleDropdownChange(value)}>
            { optionList.map( (i,index) =>     
                <option value={i.value} key={index}>{i.label}</option>
            )}
        </select>
    )
}

export default Dropdown;