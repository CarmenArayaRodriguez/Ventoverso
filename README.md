# VentoVerso - Backend para tienda virtual de instrumentos de viento

## Introducción

Este repositorio contiene el backend para VentoVerso, una tienda virtual especializada en la venta de instrumentos musicales de viento.

## Requisitos previos

Antes de proceder con la instalación y configuración de este proyecto, asegúrese de tener instalado:

- Node.js (Versión recomendada: 14.x o superior)
- NPM (Node Package Manager, viene con Node.js)
- Sistema de gestión de base de datos compatible (Recomendado: MySQL versión 5.7 o superior)

## Instalación

Para instalar este proyecto en su entorno de desarrollo o producción, siga los siguientes pasos:

1. **Clonación del repositorio:**

    Ejecute el siguiente comando para clonar el repositorio:

    ```bash
    git clone https://github.com/tuusuario/ventoverso.git
    cd ventoverso
    ```

2. **Instalación de dependencias:**

    Ejecute el siguiente comando para instalar las dependencias necesarias:

    ```bash
    npm install
    ```

## Configuración

### Base de datos

Configure su base de datos según las necesidades de su entorno. Asegúrese de crear las tablas y relaciones necesarias antes de ejecutar la aplicación.

### Variables de entorno

Cree un archivo `.env` en la raíz del proyecto para configurar las variables de entorno. Este archivo no debe ser incluido en el control de versiones por razones de seguridad. En su lugar, se proporciona un archivo `.env.example` en el repositorio como una plantilla. Copie este archivo a uno llamado `.env` y reemplace los valores de ejemplo con sus credenciales reales.

### Credenciales y datos de prueba

Para facilitar la prueba y validación del sistema, se pueden utilizar datos de prueba para usuarios y productos. Un archivo `credenciales.txt.example` se proporciona como una plantilla para definir las credenciales de los usuarios de prueba. Copie este archivo a uno llamado `credenciales.txt` y reemplace los valores de ejemplo con información de prueba válida.

## Herramientas de desarrollo

### Script para hashear contraseñas (Uso limitado)

Para facilitar la tarea de almacenar o actualizar las contraseñas en la base de datos de manera segura, proporcionamos un script `hash-password.js`. Este script es útil solo para situaciones específicas, como pruebas o migración de datos, y no es parte del funcionamiento normal de la aplicación. **No utilice contraseñas reales en entornos de desarrollo compartidos o públicos**. La aplicación maneja automáticamente el hashing de contraseñas durante la creación y actualización de usuarios.

**Uso**:

1. Asegúrese de tener las dependencias necesarias instaladas (`bcrypt` para hashing y `winston` para logging).
2. Modifique la variable `passwordPlana` en el script con la contraseña que deseas hashear.
3. Ejecute el script con Node.js:

    ```bash
    node hash-password.js
    ```

El script imprimirá el hash de la contraseña en la consola. Asegúrese de no utilizar contraseñas reales o sensibles en entornos de desarrollo compartidos o públicos.


## Ejecución

Para iniciar la aplicación en modo desarrollo, ejecute:

```bash
npm run start:dev
```

Para construir y ejecutar la aplicación en producción, ejecute:

```bash
npm run build
npm run start:prod
```



