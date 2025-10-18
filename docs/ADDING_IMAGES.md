# Guía: Agregar Imágenes al Proyecto

## 📸 Ubicación de Imágenes

Todas las imágenes deben colocarse en el directorio `public/`:

```
public/
├── hero/
│   └── vehicle-main.jpg      # Vehículo principal del hero
├── tech/
│   ├── battery.jpg           # Imágenes de tecnología
│   ├── motor.jpg
│   ├── ai-system.jpg
│   └── thermal.jpg
└── logos/
    └── bravo-logo.svg        # Logo de la empresa
```

## 🖼️ Formatos Recomendados

### Para Hero Section (vehículo principal)
- **Formato**: WebP con fallback JPEG
- **Resolución**: 1920x1080px mínimo (2560x1440px ideal)
- **Peso**: < 500KB optimizado
- **Aspect ratio**: 16:9

### Para Íconos de Tecnología
- **Formato**: SVG (vectorial) o PNG
- **Resolución**: 512x512px para PNG
- **Peso**: < 100KB
- **Fondo**: Transparente

### Para Logo
- **Formato**: SVG preferido
- **Colores**: Variante blanca para fondo oscuro
- **Peso**: < 50KB

## 🔧 Cómo Integrar las Imágenes

### 1. Hero Section

Edita `src/components/sections/HeroSection.tsx`:

```typescript
import Image from 'next/image'

// Agregar después de los orbs parallax (línea ~100):
<motion.div
  initial={{ opacity: 0, scale: 1.1 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2 }}
  className="absolute inset-0 z-0"
>
  <Image
    src="/hero/vehicle-main.jpg"
    alt="Vehículo eléctrico Bravo Motor"
    fill
    className="object-cover opacity-40"
    priority
    quality={90}
  />
</motion.div>
```

### 2. Tech Innovation Section

Reemplaza los emojis por imágenes en `src/components/sections/TechInnovationSection.tsx`:

```typescript
// En el array techFeatures (línea ~25), cambiar:
const techFeatures: TechFeature[] = [
  {
    icon: '/tech/battery.jpg',  // ← Cambiar de emoji a ruta
    title: 'Batería de Última Generación',
    // ... resto igual
  },
  // ... otros features
]

// En el render del ícono (línea ~150), cambiar:
<motion.div
  whileHover={{ scale: 1.2, rotate: 360 }}
  transition={{ duration: 0.5 }}
  className="w-16 h-16 rounded-xl bg-gradient-to-br from-electric-blue/20 to-electric-purple/20 flex items-center justify-center border border-white/10 overflow-hidden"
>
  <Image
    src={feature.icon}
    alt={feature.title}
    width={64}
    height={64}
    className="object-cover"
  />
</motion.div>
```

## 🎨 Optimización de Imágenes

### Antes de agregar al proyecto:

1. **Comprimir imágenes**:
   ```bash
   # Con ImageOptim (Mac) o similar
   # O usa servicios online como TinyPNG
   ```

2. **Convertir a WebP**:
   ```bash
   # Instalar cwebp
   cwebp -q 85 input.jpg -o output.webp
   ```

3. **Responsive images** (múltiples tamaños):
   ```
   vehicle-main-320w.jpg   # Mobile
   vehicle-main-768w.jpg   # Tablet
   vehicle-main-1920w.jpg  # Desktop
   ```

### Next.js Image Optimization

Next.js optimiza automáticamente las imágenes, pero puedes mejorar:

```typescript
<Image
  src="/hero/vehicle-main.jpg"
  alt="Description"
  width={1920}
  height={1080}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1920px"
  priority  // Para imágenes above-the-fold
  quality={85}  // 85 es un buen balance
/>
```

## 🚀 Configuración Avanzada

### Agregar dominio externo de imágenes

Si usas CDN o imágenes externas, edita `next.config.mjs`:

```javascript
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-cdn-domain.com',
        pathname: '/images/**',
      },
    ],
  },
}
```

### Lazy Loading

Para imágenes below-the-fold:

```typescript
<Image
  src="/tech/battery.jpg"
  alt="Batería"
  width={800}
  height={600}
  loading="lazy"  // Carga lazy automática
/>
```

## 📝 Checklist de Imágenes Necesarias

- [ ] **Hero principal** (vehículo completo, ángulo 3/4)
- [ ] **Batería** (close-up tecnológico)
- [ ] **Motor** (componentes internos)
- [ ] **Sistema AI** (dashboard o cámaras)
- [ ] **Gestión térmica** (sistema de refrigeración)
- [ ] **Logo Bravo Motor** (SVG blanco)
- [ ] **Favicon** (32x32px, formato .ico o .png)

## 🎯 Ejemplos de Composición

### Hero con overlay gradient

```typescript
<div className="relative">
  <Image src="/hero/vehicle.jpg" alt="..." fill />
  
  {/* Gradient overlay para mejor legibilidad */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
  
  {/* Contenido encima */}
  <div className="relative z-10">
    {/* Tu contenido aquí */}
  </div>
</div>
```

### Parallax con múltiples capas

```typescript
// Capa de fondo (movimiento lento)
<motion.div style={{ y: y1 }}>
  <Image src="/bg-layer-1.jpg" alt="..." />
</motion.div>

// Capa frontal (movimiento rápido)
<motion.div style={{ y: y2 }}>
  <Image src="/bg-layer-2.png" alt="..." />
</motion.div>
```

## ⚡ Performance Tips

1. **Usar `priority` solo en hero image**
2. **Especificar `width` y `height` para evitar layout shift**
3. **Usar WebP con fallback JPEG**
4. **Lazy load para imágenes fuera del viewport inicial**
5. **Responsive images con `sizes` attribute**

## 🔍 Testing de Imágenes

Después de agregar imágenes, verifica:

```bash
# Build del proyecto
npm run build

# Revisar el reporte
# Buscar "Image Optimization" en el output
```

Chrome DevTools:
1. Network tab → Filter: Img
2. Verificar peso < 500KB por imagen
3. Lighthouse → Performance score > 90

---

**¿Listo para agregar tus imágenes?**

1. Coloca las imágenes en `public/`
2. Sigue los ejemplos de código arriba
3. Optimiza antes de subir
4. Test de performance
5. ¡Disfruta el resultado! 🚗⚡

