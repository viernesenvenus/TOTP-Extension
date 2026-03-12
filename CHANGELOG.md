# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [1.0.0] - 2026-03-12

### Agregado

#### Funcionalidad Core
- **Generación de códigos TOTP**: Implementación completa del algoritmo TOTP (RFC 6238)
- **Soporte multi-algoritmo**: SHA1, SHA256, SHA512
- **Configuración flexible**: 6-8 dígitos, períodos de 30-60 segundos
- **Actualización en tiempo real**: Los códigos se regeneran automáticamente
- **Copiar al portapapeles**: Un clic en cualquier parte de la tarjeta o botón específico

#### Gestión de Cuentas
- **Agregar cuentas manualmente**: Formulario completo con validación
- **Eliminar cuentas**: Con confirmación de seguridad
- **Exportar cuentas**: Respaldo en formato JSON con timestamp
- **Importar cuentas**: Desde archivos JSON con validación
- **Búsqueda en tiempo real**: Filtrado por nombre o plataforma
- **Ordenamiento múltiple**: Por nombre, plataforma o fecha (ascendente/descendente)

#### Interfaz de Usuario
- **Diseño moderno**: Interfaz limpia con tarjetas y animaciones suaves
- **Tema oscuro**: Cambio entre tema claro y oscuro con persistencia
- **Barra de progreso**: Indicador visual del tiempo restante
- **Estado de advertencia**: Barra roja cuando quedan menos de 10 segundos
- **Estado vacío**: Mensaje e interfaz amigable para nuevos usuarios
- **Feedback visual**: Confirmación al copiar códigos

#### Validación y Seguridad
- **Validación de claves Base32**: Verificación de formato y caracteres válidos
- **Detección de duplicados**: Evita agregar cuentas duplicadas
- **Validación de longitud**: Mínimo 16 caracteres para claves secretas
- **Almacenamiento local**: Todas las claves se guardan localmente en el navegador
- **Sin conexión a internet**: Funciona completamente offline

#### Accesibilidad
- **Soporte ARIA**: Labels, roles y atributos para lectores de pantalla
- **Navegación por teclado**: Enter/Space para copiar códigos
- **Roles semánticos**: Dialog, tablist, listitem, progressbar
- **Regiones live**: Actualizaciones anunciadas a lectores de pantalla
- **Focus management**: Navegación lógica con Tab

#### Persistencia
- **Storage local**: Chrome Storage API para datos persistentes
- **Preferencias guardadas**: Tema y ordenamiento se mantienen entre sesiones
- **Timestamps**: Cada cuenta registra su fecha de creación

### Tecnologías Utilizadas
- Manifest V3 (Chrome/Safari)
- OTPAuth.js 9.1.3
- Vanilla JavaScript (ES6+)
- CSS3 con variables y Grid/Flexbox
- Chrome Storage API
- Clipboard API

### Estructura del Proyecto
```
TOTP-Extension/
├── manifest.json           # Configuración de la extensión
├── popup/
│   ├── popup.html         # Interfaz del popup (117 líneas)
│   ├── popup.css          # Estilos modernos (478 líneas)
│   └── popup.js           # Lógica de la aplicación (575 líneas)
├── background/
│   └── background.js      # Service worker (30 líneas)
├── libs/
│   └── otpauth-9.1.3.min.js  # Librería TOTP
├── icons/
│   ├── icon.svg           # Ícono vectorial
│   └── ICONS_README.txt   # Instrucciones para generar íconos
├── README.md              # Documentación completa
├── CHANGELOG.md           # Este archivo
├── LICENSE                # Licencia MIT
└── .gitignore            # Archivos ignorados por git
```

### Próximas Funcionalidades (Roadmap)
- [ ] Escaneo de códigos QR con cámara
- [ ] Sincronización entre dispositivos (con encriptación)
- [ ] Categorías/etiquetas para cuentas
- [ ] Edición de cuentas existentes
- [ ] Soporte para HOTP (Counter-based OTP)
- [ ] Backup automático programado
- [ ] Protección con contraseña maestra
- [ ] Estadísticas de uso

### Métricas del Proyecto
- **Total de líneas de código**: ~1,200
- **Archivos JavaScript**: 2
- **Archivos CSS**: 1
- **Archivos HTML**: 1
- **Commits iniciales**: 15
- **Funciones implementadas**: 40+

### Contribuidores
- Desarrollado por asther0
- Co-Authored-By: Claude Opus 4.6

---

## Convenciones de Versionado

- **MAJOR** (1.x.x): Cambios incompatibles con versiones anteriores
- **MINOR** (x.1.x): Nueva funcionalidad compatible con versiones anteriores
- **PATCH** (x.x.1): Correcciones de bugs compatibles

---

*Para más información sobre el proyecto, consulta el [README.md](README.md)*
