# 🚀 Quick Start - Bravo Motor Company Landing

## Instalación y Ejecución

### 1. Instalar Dependencias

```bash
npm install
```

Esto instalará todas las dependencias necesarias:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Y más...

### 2. Ejecutar en Desarrollo

```bash
npm run dev
```

El servidor se iniciará en [http://localhost:3000](http://localhost:3000)

### 3. Ver el Resultado

Abre tu navegador en `http://localhost:3000` y disfruta de:

✨ **Hero Section** con animaciones impresionantes:
- Partículas flotantes
- Efectos parallax
- Texto animado letra por letra
- Stats interactivos

⚡ **Tecnología e Innovación** con:
- Cards animadas
- Scroll-triggered effects
- Hover 3D effects
- Especificaciones técnicas interactivas

## 🎨 Personalizaciones Rápidas

### Cambiar Colores

Edita `tailwind.config.ts`:

```typescript
colors: {
  'electric': {
    blue: '#00d4ff',    // Tu color aquí
    cyan: '#00fff5',    // Tu color aquí
    purple: '#a855f7',  // Tu color aquí
  }
}
```

### Modificar Textos

Edita `src/lib/constants.ts`:

```typescript
export const COMPANY = {
  name: 'Tu Nombre de Empresa',
  tagline: 'Tu Tagline',
  // ...
}
```

### Ajustar Velocidad de Animaciones

Edita `src/lib/constants.ts`:

```typescript
export const ANIMATION = {
  duration: {
    fast: 0.3,    // Más rápido: 0.1
    normal: 0.5,  // Más rápido: 0.3
    slow: 0.8,    // Más rápido: 0.5
  }
}
```

## 📸 Agregar Imágenes

1. Coloca tus imágenes en `public/`
2. Sigue la guía en `docs/ADDING_IMAGES.md`
3. Actualiza los componentes para usar tus imágenes

## 🏗️ Build para Producción

```bash
# Generar build optimizado
npm run build

# Ejecutar build en producción
npm start
```

## 📊 Performance Check

```bash
# Después de build
npm run build

# Lighthouse audit en Chrome DevTools
# Performance > 90 ✓
# Accessibility > 90 ✓
# Best Practices > 90 ✓
# SEO > 90 ✓
```

## 🔧 Troubleshooting

### Error: Cannot find module

```bash
# Limpia cache y reinstala
rm -rf node_modules package-lock.json
npm install
```

### Animaciones lentas

```bash
# Verifica que estés en modo desarrollo
npm run dev

# En producción las animaciones son más suaves
npm run build && npm start
```

### TypeScript errors

```bash
# Limpia cache de TypeScript
rm -rf .next
npm run dev
```

## 📚 Próximos Pasos

1. ✅ Agregar imágenes reales
2. ✅ Personalizar textos y colores
3. ✅ Agregar más secciones (ver `README.md`)
4. ✅ Implementar navegación
5. ✅ Agregar formulario de contacto

## 💡 Tips

- **Hot Reload**: Los cambios se reflejan automáticamente
- **Componentes**: Están en `src/components/`
- **Estilos**: Usa clases de Tailwind CSS
- **Animaciones**: Usa Framer Motion (ya configurado)
- **Constantes**: Edita `src/lib/constants.ts`

## 🆘 Necesitas Ayuda?

- 📖 Lee `README.md` para documentación completa
- 🏛️ Revisa `docs/ARCHITECTURE.md` para detalles técnicos
- 🖼️ Consulta `docs/ADDING_IMAGES.md` para agregar imágenes

---

**¡Listo para comenzar!** 🎉

Ejecuta `npm install && npm run dev` y empieza a crear.

