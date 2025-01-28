# TareaKi
Documentación de Prueba Técnica - Evaluación Angular y .NET
Objetivo del Proyecto: El objetivo de este proyecto es implementar un sistema para la configuración y gestión de cookies en una plataforma web, abarcando tanto el frontend como el backend. Esto incluye un CRUD para políticas de cookies en el backend, la visualización y edición en el frontend, y el manejo de preferencias de cookies utilizando localStorage.

Resumen de Funcionalidad: 
El proyecto consta de:
Un banner de cookies con opciones para configurar las preferencias y redirigir a la página de políticas.
Un modal de configuración de cookies con opciones seleccionables.
Una página para visualizar y gestionar las políticas de cookies.
Un CRUD funcional en el backend y frontend para administrar las políticas.
Tecnologías Utilizadas
Frontend: Angular 19
Backend: ASP.NET Core con Web API.
Base de Datos: SQL Server.
Almacenamiento Local: localStorage para preferencias de cookies.
Estructura del Proyecto
Backend (ASP.NET Core)
Base de Datos: La base de datos cookies contiene las siguientes tablas principales:
Cookies:
Id (int, clave primaria)
Nombre (nvarchar)
Descripcion (nvarchar)

Controlador:
GET /api/cookies: Obtiene todas las políticas.
POST /api/cookies: Crea una nueva política.
PUT /api/cookies/{id}: Actualiza una política existente.
DELETE /api/cookies/{id}: Elimina una política.

Modelo:
public class Cookie {
 
  public int Id {  get; set; }
     
  public string Nombre { get; set; } 

 	 public string Descripcion { get; set; } 

}

Frontend (Angular 19)

Componentes:
cookie-pop: Modal para configurar las cookies.
cookie-políticas: Muestra las políticas guardadas.
Cookie-list: Lista todas las políticas.
cookie-form: Permite crear o editar una política.
cookie-banner: Muestra el banner inicial para aceptar o configurar cookies.
Confirmation-dialog: Ventana de confirmación para acciones como eliminación.

Interfaz Cookie:
id: number;
nombre: string;
descripcion: string;


Rutas: Configuradas en cookie.routes.ts para manejar navegación entre componentes.
 Funcionalidad Implementada
 Banner de Cookies:
Contiene el texto: "Esta página utiliza cookies para ofrecerle una mejor experiencia. Puede configurar sus preferencias o aceptar todas las cookies."
Opciones:
Botón Configurar: Abre el modal de configuración.
Enlace a la página de políticas de cookies.
Modal de Configuración de Cookies
Opciones disponibles:
Analíticas
Funcionales
Comerciales
Marketing // se marcan como las necesarias, de no ser estas se pueden cambiar
Al guardar las preferencias:
Se almacenan en localStorage.
El banner desaparece.
CRUD de Políticas
Crear: Formulario para agregar una nueva política con campos de título y descripción 
Leer: Lista las políticas existentes.
Actualizar: Permite editar una política seleccionada.
Eliminar: Confirma y elimina una política seleccionada.
Responsividad
Todas las pantallas han sido diseñadas para adaptarse a diferentes tamaños de pantalla mediante el uso de CSS Grid y Flexbox.
Pruebas Realizadas
Banner de Cookies:
Se verificó que el banner desaparezca tras guardar preferencias.
Se probó la redirección a la página de políticas.
Modal de Configuración:
Validación de selecciones y almacenamiento en localStorage.
CRUD:
Se probaron las operaciones de creación, lectura, actualización y eliminación.
Instrucciones de Ejecución
Requisitos Previos:
Node.js 
Angular 19
.NET Core SDK version 8
SQL Server express
Pasos:
Clonar el repositorio
Configurar la cadena de conexión a la base de datos en el archivo appsettings.json.
Verificar que los paquetes necesarios de Nuget estén instalados 
Ejecutar el backend: dotnet run.
Instalar dependencias en el frontend
Ejecutar el frontend: ng serve.
Conclusiones
El proyecto implementa con éxito un sistema completo para la configuración y gestión de cookies, cumpliendo con los requisitos funcionales y técnicos especificados. Aún quedan por completar detalles como la responsividad total del sitio, ya que hay componentes que presentan ciertos desperfectos al momento de variar el tamaño de las pantallas, lo que produce que no sean completamente agradables a la lectura. La mayor dificultad y debilidad en la ejecución de toda esta prueba recae en la responsividad y el diseño, la cual se comprende es mejorable en todo sentido, aun cuando se posee un conocimiento básico de css o html hay detalles que se escapan de lo conocido, por otro lado se vislumbra que disponer de un diseño establecido facilita el tiempo de ejecución del proyecto. 
