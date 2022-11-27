const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const euro = document.querySelector("#euro")


const convert=(elem,target,istrue)=>{
  elem.addEventListener('input',()=>{
    //   const request = new XMLHttpRequest()
    //   request.open('GET','data.json')
    //   request.setRequestHeader('Content-type','application/json')
    //   request.send()
    //   request.addEventListener('load',()=>{
    //       const resp = JSON.parse(request.response)
        fetch('data.json')
            .then(response => response.json())
            .then(req => {
                    if(elem === som) {
                        target.value = ( elem.value/req.usd).toFixed(2)
                        istrue.value = (elem.value/req.euro).toFixed(2)
                    } else if (elem === usd) {
                        target.value = (elem.value * req.usd).toFixed(2)
                        istrue.value = (elem.value * req.usd /req.euro).toFixed(2)
                    } else if(elem === euro) {
                        target.value = (elem.value*req.euro).toFixed(2)
                        istrue.value = (elem.value*req.euro / req.usd).toFixed(2)
                    }
                
                elem.value === "" ? (target.value = "") : null
                elem.value === "" ? (istrue.value = "") : null

            })

      })
  }

convert(som, usd, euro, 12)
convert(usd, som, euro, "")
convert(euro, som, usd, "")