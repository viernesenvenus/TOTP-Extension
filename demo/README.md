# Demo Login 2FA

Sistema de demostración para probar la extensión TOTP Authenticator.

## Inicio Rápido

1. Abre `demo/index.html` en tu navegador
2. Ve a "Configurar 2FA" y escanea el QR con la extensión
3. Ve a "Iniciar Sesión" y prueba el auto-completado

## Estructura

```
demo/
├── index.html       # Página principal
├── setup.html       # Configuración 2FA con QR
├── login.html       # Formulario de login
├── dashboard.html   # Dashboard post-login
└── README.md        # Documentación
```

## Credenciales de Demo

- Email: demo@example.com
- Password: demo123
- TOTP Secret: JBSWY3DPEHPK3PXP

## Flujo de Uso

1. **Setup**: Escanea el QR en `setup.html` con la extensión
2. **Login**: Ingresa credenciales en `login.html`
3. **Auto-submit**: La extensión completa el código MFA y envía el formulario automáticamente
4. **Dashboard**: Acceso concedido

## Notas Técnicas

- Sin backend, funciona completamente en el frontend
- Validación simple: cualquier código de 6 dígitos es válido
- Auto-submit se activa 500ms después de completar el código
- Session storage para simular autenticación

## Para Demostraciones

1. Muestra la extensión vacía
2. Escanea el QR en setup
3. Abre el side panel de la extensión en el login
4. El código se auto-completa y el formulario se envía solo
