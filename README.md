# CompraSmart 1.0 · Comparador familiar

Aplicación web instalable para móviles Android: cesta, precios manuales, comparación de una tienda o reparto entre dos, cupones por SKU y captura de cupones mediante OCR en el navegador.

## Funciones
- Supermercados de Madrid, con cobertura de precios por tienda.
- Reparto entre dos tiendas con **mínimo de 30 € o ahorro mínimo de 5 €**.
- Cupón del 10 % de empleado para Hipercor, Supercor y Supermercado El Corte Inglés, **después de los cupones** (beneficio configurable).
- Cupones con fechas y artículos incluidos, SKU/EAN y condiciones.
- Lectura OCR con Tesseract.js descargado bajo demanda en el navegador; siempre requiere revisión antes de guardar.
- Cesta y preferencias guardadas localmente en cada navegador.

**Los precios precargados son ficticios.** No representan precios actuales y no se incluyen en la comparación real salvo que se active expresamente la simulación. La lectura OCR de cámara real debe validarse en Android.

## Publicación e instalación
En Settings → Pages, publicar desde la rama main y carpeta /(root).
La página estará en https://javiortegallamas-cell.github.io/comprasmart/ cuando GitHub Pages termine el despliegue.
En Chrome Android: menú ⋮ → Instalar aplicación / Añadir a pantalla de inicio.

## Privacidad
El repositorio y su código son públicos. La cesta, los cupones y los precios introducidos por el usuario permanecen en el almacenamiento local del dispositivo y no se sincronizan. El motor OCR descarga bibliotecas de terceros; no hay backend de CompraSmart ni consultas automáticas a supermercados.
