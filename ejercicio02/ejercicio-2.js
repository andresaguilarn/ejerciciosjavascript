let pregunta = prompt('ingresa el valor que quieres conocer en ingles (casa,mesa perro o gato)')
let casa = document.getElementById('casa')
let mesa = document.getElementById('mesa')
let gato = document.getElementById('gato')
let perro = document.getElementById('perro')


switch (pregunta) {
    case "casa":
        alert("house significa casa en ingles");
        casa.classList.remove('todo')
        break;

        case "mesa":
            alert("table significa casa en ingles");
            mesa.classList.remove('todo')
            break;

            case "perro":
                alert ("dog significa casa en ingles");
                perro.classList.remove('todo')
                break;

                    case "gato":
                          alert ("cat significa gato en ingles");
                          gato.classList.remove('todo')
                          break;

    default:
        alert("Favor ingresa un valor ya sea casa, mesa, gato o perro")
        break;
}