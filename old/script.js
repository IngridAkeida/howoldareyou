function check() {
    let date = new Date()
    let yearnow = date.getFullYear()
    let birthyear = window.document.getElementById('txtyear')
    let res = window.document.querySelector('div#res')

    if (birthyear.value.length == 0 || birthyear.value > yearnow) {
        window.alert('Please, check the data and try again!')
    } else {

        let fgender = window.document.getElementsByName('radgender')
        let old = yearnow - Number(birthyear.value)
        let gender = ''
        let img = window.document.createElement('img')
        img.setAttribute('id', 'photo')

        if (fgender[0].checked) {
            gender = 'man'

            if( old >= 0 && old < 12){
                //child 
                img.setAttribute('src','image/man/manchild.png')

            } else if(old < 18){
                //young
                img.setAttribute('src','image/man/manyoung.png')
                
            } else if(old < 40){
                //adult
                img.setAttribute('src','image/man/manadult.png')
                
            } else if(old < 65){
                //middle
                img.setAttribute('src','image/man/manmiddle-aged.png')
                
            } else{
                //elderly
                img.setAttribute('src','image/man/manelderly.png')
            }

        } else if (fgender[1].checked){
            gender = 'woman'

            if( old >= 0 && old < 12){
                //child 
                img.setAttribute('src','image/woman/womanchild2.png')

            } else if(old < 18){
                //young
                img.setAttribute('src','image/woman/womanyoung.png')
                
            } else if(old < 40){
                //adult
                img.setAttribute('src','image/woman/womanadult.png')
                
            } else if(old < 65){
                //middle
                img.setAttribute('src','image/woman/womanmiddle-aged.png')
                
            } else{
                //elderly
                img.setAttribute('src','image/woman/womanelderly.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `We detected that is a <strong>${gender}</strong> who is <strong>${old}</strong> years old.`
        res.appendChild(img)
        

    }
}

