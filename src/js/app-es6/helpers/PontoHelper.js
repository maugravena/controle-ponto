import Ponto from '../models/Ponto';

class PontoHelper {
    constructor() {

    }

    static groupBy(list, keyGetter) {

        const map = new Map();
        list.forEach(registro => {

            const key = keyGetter(registro);
            //let reg = new R

            if (!map.has(key)) {
                map.set(key, [registro]);
            } else {
                map.get(key).push(registro);
            }
        });

        const resultado = [];
        let ponto;

        for (var [data, registros] of map) {
            ponto = new Ponto(data, _.orderBy(registros, ['_dataRegistro'], ['asc']));
            resultado.push(ponto);
        }
        
        return resultado;
    }
}

export default PontoHelper;