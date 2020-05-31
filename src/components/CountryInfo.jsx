import React, { Fragment } from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux'
import {postearCountryInfoByIpAccion} from '../redux/countryInfoDucks'

const CountryInfo = () => {

    // el useDispatch() que importamos nos sirve para poder consumir nuestras acciones creadas en los ducks
    const dispatch = useDispatch()


    // el useSelector() que importamos para poder leer toda la tienda
    // dentro de la tienda(store.js) tenemos statistics y countryInfo. y en countryInfo entre otras cosas
    // tiene un objeto con toda la info del country de la ip ingresada
    const countryInfo = useSelector(store => store.countryInfo.objetoo)

    console.log("Country Info component", countryInfo)




    const {register, errors, handleSubmit} = useForm();


    const onSubmit = (data, e) => {
        console.log("que hay en data",data)


        
        dispatch(postearCountryInfoByIpAccion(data.ip))
        // esto limpia los campos una vez que se termino de ejecutar el form al darle click  a agregar
        e.target.reset()

    }





    return (
        <Fragment>
            Informacion del country de la IP Ingresada
            <p></p>
            
            <form onSubmit ={handleSubmit(onSubmit)} >
                <input
                    name="ip"
                    placeholder="Ingrese una IP (ejemplo 123.123.123.123)"
                    className="form-control my-2"
                    ref={
                        register({
                        required: {value:true, message: 'IP obligatoria!'},
                        minLength: {value:7, message: 'el minimo es 7 caracteres amigacho'}
                    })}
                ></input>

            
                {
                    // una forma de mostrar errores de validacion del input ip
                    errors.ip && 
                    <span className="text-danger text-small d-block mb-2">
                        {errors.ip.message}
                    </span>
                }


                <button className="btn btn-primary">Agregar</button>
            </form>
            
                  
            <div>
                {countryInfo.ip_inserted} - {countryInfo.name} - {countryInfo.iso_code}
            </div>

        </Fragment>
    )
}


export default CountryInfo