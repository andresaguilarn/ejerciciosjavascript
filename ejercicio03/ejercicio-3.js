const mensaje = prompt('bienvenido a la pizza de eren escribe el tipo de pizza que deseas: "familiar", "personal" o "mediana"')

if (mensaje === 'personal'){
    let tipopizza = prompt('que sabor deseas de pizza de "champiñones", "hawaiana" o "carnes"')

    if(tipopizza === 'champiñones'){
        let contenidos = prompt('desea que su pizza personal de champiñones lleve "1-queso" o "2-sin queso"')
        switch (contenidos) {
            case '1':
                alert('su pizza sera una personal de champiñones con queso')
                break;
            case '2':
                let segundocontenido = prompt('desea con "1-borde de bocadillo" o "2-con salsa"')
                switch (segundocontenido) {
                    case '1':
                        alert('su pizza sera una personal de champiñones sin queso con borde de bocadillo')
                        break;
                    case '2':
                        alert('su pizza sera una personal de champiñones sin queso con salsa')
                        break;
                
                    default:
                    alert('por favor ingrese un valor valido ya sea 1 0 2')
                        break;
                }
                break;
        
            default:
                alert('por favor ingrese un valor valido')
                break;
        } 
    }else if(tipopizza === 'hawaiana'){
        let contenidos = prompt('desea la pizza con "1-salami" o "2-sin salami"')
        switch (contenidos) {
            case '1':
                let segundocontenido = prompt('desea su pizza personal hawaina con "1-sin piña" "2-sin jamon"')
                switch (segundocontenido) {
                    case '1':
                        alert('su pizza sera una personal hawaiana con salami y sin piña')
                        break;
                    case '2':
                        alert('su pizza sera una personal hawaiana con salami y sin jamon')
                        break;
                
                    default:
                        alert('por favor introdusca un valor ya sea 1 o 2')
                        break;
                }
                break;
            case '2':
                let segundocontenido1 = prompt('desea su pizza personal hawaina con "1-sin piña" "2-sin jamon"')
                switch (segundocontenido1) {
                    case '1':
                        alert('su pizza sera una personal hawaiana sin salami y sin piña')
                        break;
                    case '2':
                        alert('su pizza sera una personal hawaiana sin salami y sin jamon')
                        break;
                
                    default:
                        alert('por favor introdusca un valor ya sea 1 o 2')
                        break;
                }
                break;

        
            default:
                break;
        
    
        }
    }else if(tipopizza === 'carnes'){
        let contenidos = prompt('desea su pizza personal de carnes con 1-con salami o 2-sin salami')
        switch (contenidos) {
            case '1':
            let segundocontenido = prompt('desea su pizza personal de carnes con "1-con queso" o "2-sin queso"')
                switch (segundocontenido) {
                    case '1':
                        alert('su pizza sera una personal  de carnes con salami y con queso')
                        break;
                    case '2':
                        alert('su pizza sera una personal  de carnes con salami y sin queso')
                        break;
                
                    default:
                        alert('por favor ingrese un valor valido ya sea 1 o 2')
                        break;
                }
                break;
                case '2':
            let segundocontenido1 = prompt('desea su pizza personal de carnes con "1-con queso" o "2-sin queso"')
                switch (segundocontenido1) {
                    case '1':
                        alert('su pizza sera una personal  de carnes sin salami y con queso')
                        break;
                    case '2':
                        alert('su pizza sera una personal  de carnes sin salami y sin queso')
                        break;
                
                    default:
                        alert('por favor ingrese un valor valido ya sea 1 o 2')
                        break;
                }
                break;
        
        
            default:
                alert('por favor introdusca un valor valido')
                break;
        }
    }else{
        alert('por favor ingresa un valor valido ya sea "carnes" "champiñones" "hawaiana"')
    }
}else if(mensaje === 'familiar'){
    let tipopizza = prompt('que sabor deseas de pizza de "vegetariana",  o "pollo y carne"')
    if(tipopizza === 'vegetariana'){
        let contenidos = prompt('desea su pizza vegetariana "1-con queso" o "2-sin queso"')
        switch (contenidos) {
            case '1':
                alert('su pizza sera una familiar vegetariana con queso')
                break;
            case '2':
                alert('su pizza sera una familiar vegetariana sin queso')
                break;
        
        
            default:
            alert('por favor introdusca un valor valido ya sea 1 o 2')
                break;
        }

    }else if (tipopizza === 'pollo y carne'){
        let contenidos = prompt('desea su pizza con "1-adicion de salchicha" o "2-adicion de champiñones" o "3-sin ninguno" o "4-con ambos"')
            switch (contenidos) {
                case '1':
                    alert('su pizza familiar sera una de pollo y carne con adicion de salchicha')
                    break;
                case '2':
                    alert('su pizza familiar sera una de pollo y carne con adicion de champiñones')
                    break;
                case '3':
                    alert('su pizza familiar sera una de pollo y carne')
                    break;
                case '4':
                    alert('su pizza familiar sera una de pollo y carne con adicion de champiñones y adicion de salchicha ')
                    break;
            
                default:
                    alert('por favor introdusca un valor valido ya sea 1, 2, 3 o 4')
                    break;
            }
    }else{
        alert('por favor ingres un valor valido ya sea "vegetariana" o "pollo y carne""')
    }

}else if(mensaje === 'mediana'){
    let tipopizza = prompt('que sabor deseas de pizza de "criolla", o "mexicana"')
    if(tipopizza === 'criolla'){
        let contenidos = prompt('desea su pizza con "1-extra carne molida" o "2-con queso"')
        switch (contenidos) {
            case '1':
                let segundocontenido1 = prompt('desea su pizza mediana criolla con "1-nachos" o "2-sin nachos"')
                switch (segundocontenido1) {
                    case '1':
                        alert('su pizza sera una criolla  mediana con extra carne molida y nachos')
                        break;
                    case '2':
                        alert('su pizza sera una criolla  mediana con extra carne molida y sin  nachos')
                        break;
                
                    default:
                    alert('por favor introdusca un numero valido ya sea 1 o 2')
                        break;
                }
                break;
            case '2':
                let segundocontenido2 = prompt('desea su pizza mediana criolla con "1-nachos" o "2-sin nachos"')
                switch (segundocontenido2) {
                    case '1':
                        alert('su pizza sera una criolla mediana de queso con nachos')
                        break;
                    case '2':
                        alert('su pizza sera una criolla mediana de queso sin nachos')
                        break;
                
                    default:
                        alert('por favor introdusca un valor valido ya sea 1 o 2')
                        break;
                }
                break;
        
            default:
                alert('introdusca un valor valido')
                break;
        }


    }else if(tipopizza ==='mexicana'){
         let contenidos = prompt('desea su pizza con "1-extra guacamole" o "2-sin guacamole"')
        switch (contenidos) {
            case '1':
                let segundocontenido1 = prompt('desea su pizza mediana mexicana con "1-nachos" o "2-sin nachos"')
                switch (segundocontenido1) {
                    case '1':
                        alert('su pizza sera una mexicana mediana con extra guacamole y nachos')
                        break;
                    case '2':
                        alert('su pizza sera una mexicana  mediana con extra extra guacamole y sin  nachos')
                        break;
                
                    default:
                    alert('por favor introdusca un numero valido ya sea 1 o 2')
                        break;
                }
                break;
            case '2':
                let segundocontenido2 = prompt('desea su pizza mediana mexicana con "1-nachos" o "2-sin nachos"')
                switch (segundocontenido2) {
                    case '1':
                        alert('su pizza sera una mexicana mediana sin extra guacamole con nachos')
                        break;
                    case '2':
                        alert('su pizza sera una mexicana mediana sin extra guacamole y sin nachos')
                        break;
                
                    default:
                        alert('por favor introdusca un valor valido ya sea 1 o 2')
                        break;
                }
                break;
        
            default:
                alert('introdusca un valor valido')
                break;
        }


    }else{
        alert('por favor ingresa un valor valido ya sea "criolla" o "mexicana"')
    }
}else{
    alert('por favor ingesa un valor ya sea "familiar", "personal" o "mediana"')
}