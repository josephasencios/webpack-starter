import '../css/componentes.css';

export const saludar = (nombre)=>{
    console.log('Creando etiqueta H1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}, cómo estás? todo bien?`;
    document.body.append(h1);
};