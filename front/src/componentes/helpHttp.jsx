
// En programación, un helper es una función o conjunto de funciones diseñadas para realizar tareas comunes y repetitivas, facilitando así el desarrollo y mantenimiento del código. Los helpers se utilizan para encapsular lógica que puede ser reutilizada en diferentes partes de un programa, mejorando la modularidad y legibilidad del código

export const helpHttp = () =>{

    const customFech = (endpoint, options) =>{

        const defaultHeader= {
            accept: "application/json",
        };
        //encabezado predeterminado

        const controller = new AbortController();
        options.signal = controller.signal;

        options.method = options.method || "GET";
        options.headers = options.headers ? {...defaultHeader, ...options.headers} : defaultHeader;

        options.body = JSON.stringify(options.body) || false;
        if (!options.body) delete options.body;

        //console.log(options);

        setTimeout(() => controller.abort(),3000);

        return fetch (endpoint, options)
        .then((res) => res.ok ? res.json() : Promise.reject({
            err: true,
            status: res.status || "00",
            statusText: res.statusText || "Ocurrió un error",
        }))
        .catch((err) => err);

    };

    const get = (url, options = {}) => customFech(url, options);

    const post = (url, options= {}) => {
        options.method = "POST";
        return customFech(url, options);
    };

    const put = (url, options= {}) => {
        options.method = "PUT";
        return customFech(url, options);
    };

    const del = (url, options= {}) => {
        options.method = "DELETE";
        return customFech(url, options);
    };

    return {
        get,
        post,
        put,
        del,
    };
}



// import { helpHttp } from './helpHttp';

// const api = helpHttp();

// api.get('http://localhost:3000/recetas')
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// api.post('http://localhost:3000/recetas', {
//   body: { nombre: 'Nueva Receta', ingredientes: '...', receta: '...' }
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));