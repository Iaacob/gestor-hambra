import React from "react";

function formulario() {
  return <div class="container">
      <div class="row">
          <div class="one-half column">
            <h2>Crear una cita</h2>
            <form>
                <label>Nombre de la mascota</label>
                <input type="text" name="mascota" class="u-full-width" placeholder="nombre de la mascota..." value/>
                <label>Nombre del dueño</label>
                <input type="text" name="dueño" class="u-full-width" placeholder="nombre del dueño..." value/>
                <label>fecha</label>
                <input type="text" name="dueño" class="u-full-width" placeholder="nombre del dueño..." value/>
                <label>hora</label>
                <input type="time" name="hora" class="u-full-width" value=""/>
                <label>Sintomas</label>
                <textarea name="sintomas" class="u-full-width"></textarea>
                <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
            </form>
          </div>
      </div>
  </div>;
}

export default formulario;