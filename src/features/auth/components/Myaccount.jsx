import React, { useState } from "react";
import { useFormValidation } from "../../layout/hooks/useFormValidation";

export const Myaccount = () => {

  const [modoRegistro, setModoRegistro] = useState(false);

  const validate = (values) => {

    let errors = {};

    if (!values.email) {
      errors.email = "El correo es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Correo inválido";
    }

    if (!values.password) {
      errors.password = "La contraseña es obligatoria";
    } else if (values.password.length < 6) {
      errors.password = "Debe tener mínimo 6 caracteres";
    }

    if (modoRegistro && !values.name) {
      errors.name = "El nombre es obligatorio";
    }

    return errors;
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = useFormValidation(
    {
      name: "",
      email: "",
      password: ""
    },
    validate
  );

  const enviarFormulario = () => {

    if (modoRegistro) {
      alert("Usuario registrado correctamente");
    } else {
      alert("Inicio de sesión correcto");
    }

  };

  return (

    <section className="py-5 bg-light">

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-md-6 col-lg-5">

            <div className="card shadow-sm border-0">

              <div className="card-body p-4">

                <h3 className="text-center mb-4">

                  {modoRegistro ? "Crear cuenta" : "Iniciar sesión"}

                </h3>

                <form onSubmit={(e) => handleSubmit(e, enviarFormulario)}>

                  {modoRegistro && (

                    <div className="mb-3">

                      <label className="form-label">
                        Nombre
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={values.name}
                        onChange={handleChange}
                      />

                      {errors.name && (
                        <small className="text-danger">
                          {errors.name}
                        </small>
                      )}

                    </div>

                  )}

                  <div className="mb-3">

                    <label className="form-label">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={values.email}
                      onChange={handleChange}
                    />

                    {errors.email && (
                      <small className="text-danger">
                        {errors.email}
                      </small>
                    )}

                  </div>

                  <div className="mb-3">

                    <label className="form-label">
                      Contraseña
                    </label>

                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={values.password}
                      onChange={handleChange}
                    />

                    {errors.password && (
                      <small className="text-danger">
                        {errors.password}
                      </small>
                    )}

                  </div>

                  <button className="btn btn-primary w-100">

                    {modoRegistro ? "Registrarse" : "Iniciar sesión"}

                  </button>

                </form>

                <div className="text-center mt-3">

                  <button
                    className="btn btn-link"
                    onClick={() => setModoRegistro(!modoRegistro)}
                  >

                    {modoRegistro
                      ? "¿Ya tienes cuenta? Inicia sesión"
                      : "¿No tienes cuenta? Regístrate"}

                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

};