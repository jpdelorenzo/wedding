# Valen & JP

Sitio del casamiento: Home, confirmación de asistencia y página de éxito. Es estático (HTML + Tailwind por CDN). Las confirmaciones se guardan en un Google Form.

## Ver en local

Desde esta carpeta:

```bash
npx serve .
```

Abrí la URL que imprime (por lo general `http://localhost:3000`).

## Deploy a GitHub Pages

1. Creá un repo **público** vacío en GitHub. Nombre sugerido: `wedding-jp-vg`.
2. En esta carpeta:

```bash
git init
git add .
git commit -m "Sitio del casamiento"
git branch -M main
git remote add origin https://github.com/<usuario>/wedding-jp-vg.git
git push -u origin main
```

3. En GitHub: **Settings → Pages**.
4. **Source:** Deploy from a branch.
5. **Branch:** `main`, carpeta `/ (root)`. Save.
6. Esperá 1–2 minutos. El sitio queda en `https://<usuario>.github.io/wedding-jp-vg/`.
7. Cada `git push` a `main` republica solo.

No hace falta GitHub Action ni `npm run build`. Las rutas son relativas (`./rsvp.html`) para que funcione en local y bajo `/wedding-jp-vg/`.

Dominio custom (opcional): Settings → Pages → Custom domain.

## Google Form

El RSVP ya apunta a [Confirmación casamiento Valen & JP](https://docs.google.com/forms/d/e/1FAIpQLScYVTHse9oasScuHJ5KbmI_21oLRzPvJmY1YojBTQ-_r_cJhA/viewform). IDs en [`js/rsvp.js`](js/rsvp.js).

Las opciones de **restricciones alimentarias** en el Form tienen que ser exactamente estas cuatro (una sola respuesta):

- Ninguna
- Vegetariano
- Celíaco / Sin TACC
- Vegano

Si las cambiás, actualizá también los `value` del radio en `rsvp.html`.

También están conectados **Combi** (Si / No) y **Comentarios**. Las opciones de Combi tienen que ser exactamente `Si` y `No`.

## Notas

- Las fotos del diseño de Stitch están en `lh3.googleusercontent.com` y pueden vencer. Si se rompen, bajalas a `assets/` y actualizá las URLs.
- La fuente original de las pantallas está en `stitch_designs/`.
