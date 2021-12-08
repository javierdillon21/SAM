/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMiembro = /* GraphQL */ `
  query GetMiembro($id: ID!) {
    getMiembro(id: $id) {
      id
      nombres
      apellidos
      seudonimo
      sexo
      fecha_nacimiento
      nacionalidad
      ciudad_residencia
      direccion
      correo
      estado_civil
      numero_hijos
      nombre_conyuge
      ocupacion_laboral
      lugar_trabajo
      cargo_trabajo
      tiempo_libre
      numero_hermanos
      representanteID
      parentesco_representante
      lugar_estudio
      jornada_academica
      nivel_academico_actual
      telefono_convencional
      telefono_celular
      whatsapp
      nombre_padre
      nombre_madre
      vive_con
      invitadorID
      invitado_por {
        id
        nombres
        apellidos
        seudonimo
        sexo
        fecha_nacimiento
        nacionalidad
        ciudad_residencia
        direccion
        correo
        estado_civil
        numero_hijos
        nombre_conyuge
        ocupacion_laboral
        lugar_trabajo
        cargo_trabajo
        tiempo_libre
        numero_hermanos
        representanteID
        parentesco_representante
        lugar_estudio
        jornada_academica
        nivel_academico_actual
        telefono_convencional
        telefono_celular
        whatsapp
        nombre_padre
        nombre_madre
        vive_con
        invitadorID
        invitado_por {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        parentesco_invitador
        createdAt
        registrado_por
        status
        asistencias {
          nextToken
        }
        servicios {
          nextToken
        }
        representante {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        semilleroID
        semillero {
          id
          equipoID
          administradorID
          dia
          horario
          lugar
          createdAt
          updatedAt
        }
        equipoID
        equipo {
          nombre
          administradorID
          caracter
          createdAt
          updatedAt
        }
        updatedAt
      }
      parentesco_invitador
      createdAt
      registrado_por
      status
      asistencias {
        items {
          id
          miembroID
          reunionID
          createdAt
          updatedAt
        }
        nextToken
      }
      servicios {
        items {
          id
          ministerioID
          miembroID
          reunionID
          createdAt
          updatedAt
        }
        nextToken
      }
      representante {
        id
        nombres
        apellidos
        seudonimo
        sexo
        fecha_nacimiento
        nacionalidad
        ciudad_residencia
        direccion
        correo
        estado_civil
        numero_hijos
        nombre_conyuge
        ocupacion_laboral
        lugar_trabajo
        cargo_trabajo
        tiempo_libre
        numero_hermanos
        representanteID
        parentesco_representante
        lugar_estudio
        jornada_academica
        nivel_academico_actual
        telefono_convencional
        telefono_celular
        whatsapp
        nombre_padre
        nombre_madre
        vive_con
        invitadorID
        invitado_por {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        parentesco_invitador
        createdAt
        registrado_por
        status
        asistencias {
          nextToken
        }
        servicios {
          nextToken
        }
        representante {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        semilleroID
        semillero {
          id
          equipoID
          administradorID
          dia
          horario
          lugar
          createdAt
          updatedAt
        }
        equipoID
        equipo {
          nombre
          administradorID
          caracter
          createdAt
          updatedAt
        }
        updatedAt
      }
      semilleroID
      semillero {
        id
        equipoID
        administradorID
        dia
        horario
        lugar
        miembros {
          nextToken
        }
        equipo {
          nombre
          administradorID
          caracter
          createdAt
          updatedAt
        }
        administrador {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        createdAt
        updatedAt
      }
      equipoID
      equipo {
        nombre
        semilleros {
          nextToken
        }
        administradorID
        caracter
        administrador {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        miembros {
          nextToken
        }
        reuniones {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const listMiembros = /* GraphQL */ `
  query ListMiembros(
    $filter: ModelMiembroFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMiembros(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombres
        apellidos
        seudonimo
        sexo
        fecha_nacimiento
        nacionalidad
        ciudad_residencia
        direccion
        correo
        estado_civil
        numero_hijos
        nombre_conyuge
        ocupacion_laboral
        lugar_trabajo
        cargo_trabajo
        tiempo_libre
        numero_hermanos
        representanteID
        parentesco_representante
        lugar_estudio
        jornada_academica
        nivel_academico_actual
        telefono_convencional
        telefono_celular
        whatsapp
        nombre_padre
        nombre_madre
        vive_con
        invitadorID
        invitado_por {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        parentesco_invitador
        createdAt
        registrado_por
        status
        asistencias {
          nextToken
        }
        servicios {
          nextToken
        }
        representante {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        semilleroID
        semillero {
          id
          equipoID
          administradorID
          dia
          horario
          lugar
          createdAt
          updatedAt
        }
        equipoID
        equipo {
          nombre
          administradorID
          caracter
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAsistencia = /* GraphQL */ `
  query GetAsistencia($id: ID!) {
    getAsistencia(id: $id) {
      id
      miembroID
      reunionID
      miembro {
        id
        nombres
        apellidos
        seudonimo
        sexo
        fecha_nacimiento
        nacionalidad
        ciudad_residencia
        direccion
        correo
        estado_civil
        numero_hijos
        nombre_conyuge
        ocupacion_laboral
        lugar_trabajo
        cargo_trabajo
        tiempo_libre
        numero_hermanos
        representanteID
        parentesco_representante
        lugar_estudio
        jornada_academica
        nivel_academico_actual
        telefono_convencional
        telefono_celular
        whatsapp
        nombre_padre
        nombre_madre
        vive_con
        invitadorID
        invitado_por {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        parentesco_invitador
        createdAt
        registrado_por
        status
        asistencias {
          nextToken
        }
        servicios {
          nextToken
        }
        representante {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        semilleroID
        semillero {
          id
          equipoID
          administradorID
          dia
          horario
          lugar
          createdAt
          updatedAt
        }
        equipoID
        equipo {
          nombre
          administradorID
          caracter
          createdAt
          updatedAt
        }
        updatedAt
      }
      reunion {
        id
        asistencia {
          nextToken
        }
        servidores {
          nextToken
        }
        caracter
        horario
        fecha
        lugar
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAsistencias = /* GraphQL */ `
  query ListAsistencias(
    $filter: ModelAsistenciaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAsistencias(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        miembroID
        reunionID
        miembro {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        reunion {
          id
          caracter
          horario
          fecha
          lugar
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReunion = /* GraphQL */ `
  query GetReunion($id: ID!) {
    getReunion(id: $id) {
      id
      asistencia {
        items {
          id
          miembroID
          reunionID
          createdAt
          updatedAt
        }
        nextToken
      }
      servidores {
        items {
          id
          ministerioID
          miembroID
          reunionID
          createdAt
          updatedAt
        }
        nextToken
      }
      caracter
      horario
      fecha
      lugar
      createdAt
      updatedAt
    }
  }
`;
export const listReunions = /* GraphQL */ `
  query ListReunions(
    $filter: ModelReunionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReunions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        asistencia {
          nextToken
        }
        servidores {
          nextToken
        }
        caracter
        horario
        fecha
        lugar
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getServicio = /* GraphQL */ `
  query GetServicio($id: ID!) {
    getServicio(id: $id) {
      id
      ministerioID
      miembroID
      reunionID
      ministerio {
        nombre
        servidores {
          nextToken
        }
        administradorID
        administrador {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        createdAt
        updatedAt
      }
      miembro {
        id
        nombres
        apellidos
        seudonimo
        sexo
        fecha_nacimiento
        nacionalidad
        ciudad_residencia
        direccion
        correo
        estado_civil
        numero_hijos
        nombre_conyuge
        ocupacion_laboral
        lugar_trabajo
        cargo_trabajo
        tiempo_libre
        numero_hermanos
        representanteID
        parentesco_representante
        lugar_estudio
        jornada_academica
        nivel_academico_actual
        telefono_convencional
        telefono_celular
        whatsapp
        nombre_padre
        nombre_madre
        vive_con
        invitadorID
        invitado_por {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        parentesco_invitador
        createdAt
        registrado_por
        status
        asistencias {
          nextToken
        }
        servicios {
          nextToken
        }
        representante {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        semilleroID
        semillero {
          id
          equipoID
          administradorID
          dia
          horario
          lugar
          createdAt
          updatedAt
        }
        equipoID
        equipo {
          nombre
          administradorID
          caracter
          createdAt
          updatedAt
        }
        updatedAt
      }
      reunion {
        id
        asistencia {
          nextToken
        }
        servidores {
          nextToken
        }
        caracter
        horario
        fecha
        lugar
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listServicios = /* GraphQL */ `
  query ListServicios(
    $filter: ModelServicioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServicios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ministerioID
        miembroID
        reunionID
        ministerio {
          nombre
          administradorID
          createdAt
          updatedAt
        }
        miembro {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        reunion {
          id
          caracter
          horario
          fecha
          lugar
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMinisterio = /* GraphQL */ `
  query GetMinisterio($nombre: ID!) {
    getMinisterio(nombre: $nombre) {
      nombre
      servidores {
        items {
          id
          ministerioID
          miembroID
          reunionID
          createdAt
          updatedAt
        }
        nextToken
      }
      administradorID
      administrador {
        id
        nombres
        apellidos
        seudonimo
        sexo
        fecha_nacimiento
        nacionalidad
        ciudad_residencia
        direccion
        correo
        estado_civil
        numero_hijos
        nombre_conyuge
        ocupacion_laboral
        lugar_trabajo
        cargo_trabajo
        tiempo_libre
        numero_hermanos
        representanteID
        parentesco_representante
        lugar_estudio
        jornada_academica
        nivel_academico_actual
        telefono_convencional
        telefono_celular
        whatsapp
        nombre_padre
        nombre_madre
        vive_con
        invitadorID
        invitado_por {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        parentesco_invitador
        createdAt
        registrado_por
        status
        asistencias {
          nextToken
        }
        servicios {
          nextToken
        }
        representante {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        semilleroID
        semillero {
          id
          equipoID
          administradorID
          dia
          horario
          lugar
          createdAt
          updatedAt
        }
        equipoID
        equipo {
          nombre
          administradorID
          caracter
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMinisterios = /* GraphQL */ `
  query ListMinisterios(
    $nombre: ID
    $filter: ModelMinisterioFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMinisterios(
      nombre: $nombre
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        nombre
        servidores {
          nextToken
        }
        administradorID
        administrador {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEquipo = /* GraphQL */ `
  query GetEquipo($nombre: ID!) {
    getEquipo(nombre: $nombre) {
      nombre
      semilleros {
        items {
          id
          equipoID
          administradorID
          dia
          horario
          lugar
          createdAt
          updatedAt
        }
        nextToken
      }
      administradorID
      caracter
      administrador {
        id
        nombres
        apellidos
        seudonimo
        sexo
        fecha_nacimiento
        nacionalidad
        ciudad_residencia
        direccion
        correo
        estado_civil
        numero_hijos
        nombre_conyuge
        ocupacion_laboral
        lugar_trabajo
        cargo_trabajo
        tiempo_libre
        numero_hermanos
        representanteID
        parentesco_representante
        lugar_estudio
        jornada_academica
        nivel_academico_actual
        telefono_convencional
        telefono_celular
        whatsapp
        nombre_padre
        nombre_madre
        vive_con
        invitadorID
        invitado_por {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        parentesco_invitador
        createdAt
        registrado_por
        status
        asistencias {
          nextToken
        }
        servicios {
          nextToken
        }
        representante {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        semilleroID
        semillero {
          id
          equipoID
          administradorID
          dia
          horario
          lugar
          createdAt
          updatedAt
        }
        equipoID
        equipo {
          nombre
          administradorID
          caracter
          createdAt
          updatedAt
        }
        updatedAt
      }
      miembros {
        items {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        nextToken
      }
      reuniones {
        items {
          id
          caracter
          horario
          fecha
          lugar
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEquipos = /* GraphQL */ `
  query ListEquipos(
    $nombre: ID
    $filter: ModelEquipoFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEquipos(
      nombre: $nombre
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        nombre
        semilleros {
          nextToken
        }
        administradorID
        caracter
        administrador {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        miembros {
          nextToken
        }
        reuniones {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSemillero = /* GraphQL */ `
  query GetSemillero($id: ID!) {
    getSemillero(id: $id) {
      id
      equipoID
      administradorID
      dia
      horario
      lugar
      miembros {
        items {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        nextToken
      }
      equipo {
        nombre
        semilleros {
          nextToken
        }
        administradorID
        caracter
        administrador {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        miembros {
          nextToken
        }
        reuniones {
          nextToken
        }
        createdAt
        updatedAt
      }
      administrador {
        id
        nombres
        apellidos
        seudonimo
        sexo
        fecha_nacimiento
        nacionalidad
        ciudad_residencia
        direccion
        correo
        estado_civil
        numero_hijos
        nombre_conyuge
        ocupacion_laboral
        lugar_trabajo
        cargo_trabajo
        tiempo_libre
        numero_hermanos
        representanteID
        parentesco_representante
        lugar_estudio
        jornada_academica
        nivel_academico_actual
        telefono_convencional
        telefono_celular
        whatsapp
        nombre_padre
        nombre_madre
        vive_con
        invitadorID
        invitado_por {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        parentesco_invitador
        createdAt
        registrado_por
        status
        asistencias {
          nextToken
        }
        servicios {
          nextToken
        }
        representante {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        semilleroID
        semillero {
          id
          equipoID
          administradorID
          dia
          horario
          lugar
          createdAt
          updatedAt
        }
        equipoID
        equipo {
          nombre
          administradorID
          caracter
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSemilleros = /* GraphQL */ `
  query ListSemilleros(
    $filter: ModelSemilleroFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSemilleros(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        equipoID
        administradorID
        dia
        horario
        lugar
        miembros {
          nextToken
        }
        equipo {
          nombre
          administradorID
          caracter
          createdAt
          updatedAt
        }
        administrador {
          id
          nombres
          apellidos
          seudonimo
          sexo
          fecha_nacimiento
          nacionalidad
          ciudad_residencia
          direccion
          correo
          estado_civil
          numero_hijos
          nombre_conyuge
          ocupacion_laboral
          lugar_trabajo
          cargo_trabajo
          tiempo_libre
          numero_hermanos
          representanteID
          parentesco_representante
          lugar_estudio
          jornada_academica
          nivel_academico_actual
          telefono_convencional
          telefono_celular
          whatsapp
          nombre_padre
          nombre_madre
          vive_con
          invitadorID
          parentesco_invitador
          createdAt
          registrado_por
          status
          semilleroID
          equipoID
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
