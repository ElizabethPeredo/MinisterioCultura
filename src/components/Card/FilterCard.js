import Link from "next/link";

export default function FilterCard() {
    function filterSelection(c) {
        if (typeof window === 'object') {
            let x, i;
            x = document.getElementsByClassName("card-post");
            if (x !== null) {
                if (c == "all") c = "";
                for (i = 0; i < x.length; i++) {
                    RemoveClass(x[i], "show");
                    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
                }
            }
        }
    }

    function AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
        }
    }

    function RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }

    filterSelection("all")
    
    return (
        <>
            <div id="btnContainer" className="m-1 flex justify-center flex-wrap">
                <button className="mt-3 mr-3 text-white bg-principal hover:bg-principal focus:ring-4 focus:outline-none focus:ring-principal font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-color2 dark:hover:bg-principal dark:focus:ring-principal active" onClick={() => filterSelection('all')}> Mostrar Todo</button>

                <button className="mt-3 mr-3 text-white bg-principal hover:bg-principal focus:ring-4 focus:outline-none focus:ring-principal font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-color2 dark:hover:bg-principal dark:focus:ring-principal" onClick={() => filterSelection('Estudio')}> Pre Inversión</button>

                <button className="mt-3 mr-3 text-white bg-principal hover:bg-principal focus:ring-4 focus:outline-none focus:ring-principal font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-color2 dark:hover:bg-principal dark:focus:ring-principal" onClick={() => filterSelection('Inversion')}> Inversión</button>

                <button className="mt-3 mr-3 text-white bg-principal hover:bg-principal focus:ring-4 focus:outline-none focus:ring-principal font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-color2 dark:hover:bg-principal dark:focus:ring-principal" onClick={() => filterSelection('IOARR')}> IOARR</button>

                <button className="mt-3 mr-3 text-white bg-principal hover:bg-principal focus:ring-4 focus:outline-none focus:ring-principal font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-color2 dark:hover:bg-principal dark:focus:ring-principal" onClick={() => filterSelection('Programa')}> Programa</button>
               
            </div >
        </>
    )
}