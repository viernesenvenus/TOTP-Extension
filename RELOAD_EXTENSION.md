# Cómo Recargar la Extensión Correctamente

## El problema del caché del Service Worker

Chrome cachea los service workers (background scripts) agresivamente. Cuando actualizas el código, Chrome puede seguir usando la versión antigua hasta que lo fuerces a recargar.

## Solución 1: Recarga Completa (Rápida)

1. Ve a `chrome://extensions/`
2. Busca "TOTP Authenticator"
3. **Método A:** Click en el ícono de ⟳ (recargar)
4. **Método B:** Apaga el toggle y vuélvelo a encender

## Solución 2: Recarga Dura (Si persiste el error)

1. Ve a `chrome://extensions/`
2. Busca "TOTP Authenticator"
3. Click en "Quitar" o "Remove"
4. Click en "Cargar extensión sin empaquetar" o "Load unpacked"
5. Selecciona la carpeta del proyecto: `C:\Users\jhomar.astuyauri\JHOMAR_LAB\TOTP-Extension`

## Solución 3: Forzar recarga del Service Worker

1. Ve a `chrome://extensions/`
2. Activa "Modo de desarrollador" (arriba a la derecha)
3. Click en "service worker" (bajo TOTP Authenticator)
4. En la ventana de DevTools que se abre, haz click derecho en el área de código
5. Selecciona "Clear cache and hard reload" o simplemente cierra esa ventana
6. Vuelve a `chrome://extensions/` y recarga la extensión

## Verificar que se cargó correctamente

1. Después de recargar, abre DevTools en cualquier página
2. Ve a la pestaña "Console"
3. Busca el mensaje: `[TOTP Autofill] Content script cargado y listo`
4. Si aparece, la extensión se cargó correctamente

## Si el error persiste

Si después de todos estos pasos sigue apareciendo "browser is not defined":

1. Verifica que el archivo `background/background.js` contenga en la línea 7:
   ```javascript
   const browserAPI = chrome;
   ```
   (NO debe decir `const browserAPI = typeof browser !== 'undefined' ? browser : chrome;`)

2. Si el archivo está correcto pero el error persiste, es un problema de caché del navegador:
   - Cierra TODAS las ventanas de Chrome
   - Vuelve a abrir Chrome
   - Recarga la extensión

## Nota importante

Cada vez que hagas cambios en:
- `manifest.json`
- `background/background.js`
- `content/autofill.js`

**DEBES recargar la extensión** en `chrome://extensions/` para que los cambios surtan efecto.

Los cambios en:
- `sidepanel/sidepanel.js`
- `sidepanel/sidepanel.css`
- `sidepanel/sidepanel.html`

Solo requieren cerrar y volver a abrir el side panel (no recargar la extensión completa).
