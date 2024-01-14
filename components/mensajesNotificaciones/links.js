//--> Crear usuario
export const nuevoPaciente = "http://localhost:4444/api/pacientes"
export const validarToken = "http://localhost:4444/api/pacientes/confirmar/"

//--> Iniciar sesion
export const iniciarSesion = "http://localhost:4444/api/pacientes/login"
// export const iniciarSesion = "http://localhost:4444/api/administradores/login"

//--> Resetear password
export const resetearPassword = "http://localhost:4444/api/pacientes/olvide-password"
export const tokenResetearPassword = "http://localhost:4444/api/pacientes/olvide-password/"
export const cambiarPassword = "http://localhost:4444/api/pacientes/olvide-password/"

// --> Catalogo Medicinal
export const mostrarMedicinaNatural = "http://localhost:4444/api/productos/verProductos"

//----DATOS USUARIO-------
// --> Cambiar nombre
export const modificarNombre = "http://localhost:4444/api/pacientes/modificar/username"
//->Modificar contraseña
export const ModificarContrasena = "http://localhost:4444/api/pacientes/modificar/password"
//->Modificar Telefono
export const modificarTel = "http://localhost:4444/api/pacientes/modificar/telefono"
//->AgregarTarjeta
export const saveTarjeta = "http://localhost:4444/api/pacientes/modificar/tarjeta"



//---CARRITO DE COMPRAS-----
//-> Agregar Producto
export const agregarProducto = "http://localhost:4444/api/pacientes/main/carrito/agregar-producto"
//-> Incrementar Producto
export const incrementarProducto = "http://localhost:4444/api/pacientes/main/carrito/incrementar-producto"
//-> Decrementar Producto
export const decrementarProducto = "http://localhost:4444/api/pacientes/main/carrito/decrementar-producto"
//-> Eliminar Producto
export const eliminarProducto = "http://localhost:4444/api/pacientes/main/carrito/eliminar-producto"
//-> Vaciar Carrito
export const vaciarCarrito = "http://localhost:4444/api/pacientes/main/carrito/vaciar-carrito"
//--> Visualizar Carrito
export const visualizarCarrito = "http://localhost:4444/api/pacientes/main/carrito/visualizar-carrito"




//-->Funciones consulta
export const consultarTarjeta = "http://localhost:4444/api/pacientes/interaccionPed/verTarjetas"
export const consultarDir = "http://localhost:4444/api/pacientes/interaccionPed/verDirecciones"



//->Realizar pago
export const obtenerPedido = "http://localhost:4444/api/pedidos"
export const quitarPedido = "http://localhost:4444/api/pedidos/cancelarPedido"
export const pagarPedido = "http://localhost:4444/api/pedidos/main/pagar-pedido"

//--> P
export const verProductos = "http://localhost:4444/api/productos/verProductos"


//-->ConsultarCompras
export const consultarPedidos = "http://localhost:4444/api/cliente/interaccionPed/visualizar"

//-->Ver direcciones
//export const verDirecciones = "http://localhost:4444/api/cliente/interaccionPed/verDirecciones"

//-->Ver tarjetas
export const verTarjetas = "http://localhost:4444/api/cliente/interaccionPed/verTarjetas"



//-->ConsultarCompras
export const consultarHistorial = "http://localhost:4444/api/cliente/interaccionPed/visualizarEntregados"
export const mandarDevolucion = "http://localhost:4444/api/pedidos/solicitarReembolso"


//->Comentar Pedido
export const consultarProducto = "http://localhost:4444/api/cliente/interaccionPro/verAValorar"
export const valorar = "http://localhost:4444/api/cliente/interaccionPro/valorar"
export const Com = "http://localhost:4444/api/cliente/interaccionPro/comentar"