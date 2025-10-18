# 🎬 Guía de Animaciones - Framer Motion

## 📚 Conceptos Básicos

### Importar Framer Motion

```typescript
import { motion } from 'framer-motion'
```

### Componente Básico Animado

```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Contenido
</motion.div>
```

## 🎨 Animaciones Pre-Construidas

### Fade In

```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  Fade in content
</motion.div>
```

### Slide In (desde abajo)

```typescript
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  Slide up content
</motion.div>
```

### Slide In (desde izquierda)

```typescript
<motion.div
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>
  Slide from left
</motion.div>
```

### Scale In

```typescript
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, type: "spring" }}
>
  Scale in content
</motion.div>
```

### Rotate In

```typescript
<motion.div
  initial={{ opacity: 0, rotate: -180 }}
  animate={{ opacity: 1, rotate: 0 }}
  transition={{ duration: 0.8 }}
>
  Rotate in content
</motion.div>
```

## 🎯 Hover Effects

### Scale on Hover

```typescript
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
>
  Hover me
</motion.button>
```

### Glow on Hover

```typescript
<motion.div
  whileHover={{
    boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
  }}
  transition={{ duration: 0.3 }}
>
  Glow effect
</motion.div>
```

### Rotate on Hover

```typescript
<motion.div
  whileHover={{ rotate: 360 }}
  transition={{ duration: 0.5 }}
>
  Rotate on hover
</motion.div>
```

### Lift Effect (3D)

```typescript
<motion.div
  whileHover={{
    y: -10,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
  }}
  transition={{ type: "spring", stiffness: 300 }}
>
  Lift on hover
</motion.div>
```

## 🔄 Animaciones en Loop

### Pulse (latido)

```typescript
<motion.div
  animate={{
    scale: [1, 1.1, 1],
    opacity: [1, 0.8, 1],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  Pulsing element
</motion.div>
```

### Float (flotante)

```typescript
<motion.div
  animate={{
    y: [0, -20, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  Floating element
</motion.div>
```

### Rotate Infinite

```typescript
<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "linear",
  }}
>
  Spinning element
</motion.div>
```

## 📜 Scroll Animations

### Fade In on Scroll

```typescript
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function Component() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      Appears on scroll
    </motion.div>
  )
}
```

### Parallax on Scroll

```typescript
import { useScroll, useTransform } from 'framer-motion'

function Component() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <motion.div style={{ y }}>
      Parallax content
    </motion.div>
  )
}
```

## 🎭 Variantes (Patrón Recomendado)

### Definir Variantes

```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}
```

### Usar Variantes

```typescript
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  <motion.div variants={itemVariants}>Item 1</motion.div>
  <motion.div variants={itemVariants}>Item 2</motion.div>
  <motion.div variants={itemVariants}>Item 3</motion.div>
</motion.div>
```

## ⚡ Stagger Children (Cascada)

```typescript
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,  // Delay entre cada hijo
      delayChildren: 0.3,    // Delay inicial
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

<motion.ul variants={container} initial="hidden" animate="visible">
  {items.map((item, i) => (
    <motion.li key={i} variants={item}>
      {item}
    </motion.li>
  ))}
</motion.ul>
```

## 🎪 Gestures (Gestos)

### Drag

```typescript
<motion.div
  drag
  dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
  dragElastic={0.2}
>
  Drag me
</motion.div>
```

### Tap

```typescript
<motion.button
  whileTap={{ scale: 0.9 }}
  onTap={() => console.log('Tapped!')}
>
  Tap me
</motion.button>
```

## 🎨 Easings (Curvas de Animación)

```typescript
// Linear
transition={{ ease: "linear" }}

// EaseIn
transition={{ ease: "easeIn" }}

// EaseOut
transition={{ ease: "easeOut" }}

// EaseInOut
transition={{ ease: "easeInOut" }}

// Custom cubic-bezier
transition={{ ease: [0.25, 0.46, 0.45, 0.94] }}

// Spring (rebote)
transition={{ type: "spring", stiffness: 300, damping: 20 }}
```

## 🔥 Ejemplos Avanzados

### Card Flip

```typescript
const [isFlipped, setIsFlipped] = useState(false)

<motion.div
  onClick={() => setIsFlipped(!isFlipped)}
  animate={{ rotateY: isFlipped ? 180 : 0 }}
  transition={{ duration: 0.6 }}
  style={{ transformStyle: "preserve-3d" }}
>
  <div style={{ backfaceVisibility: "hidden" }}>
    Front
  </div>
  <div style={{
    backfaceVisibility: "hidden",
    transform: "rotateY(180deg)",
    position: "absolute",
    top: 0,
  }}>
    Back
  </div>
</motion.div>
```

### Morphing Shape

```typescript
<motion.div
  animate={{
    borderRadius: ["20%", "50%", "20%"],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
```

### Text Reveal (Letra por Letra)

```typescript
const text = "Bravo Motor"

<div>
  {text.split("").map((char, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.05 }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ))}
</div>
```

### Gradient Animation

```typescript
<motion.div
  style={{
    background: "linear-gradient(45deg, #00d4ff, #a855f7)",
    backgroundSize: "200% 200%",
  }}
  animate={{
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "linear",
  }}
/>
```

## 📊 Performance Tips

### ✅ DO: Animar transform y opacity

```typescript
// GPU accelerated
<motion.div
  animate={{
    opacity: 1,
    x: 100,
    y: 50,
    scale: 1.5,
    rotate: 45,
  }}
/>
```

### ❌ DON'T: Animar width, height, top, left

```typescript
// CPU intensive - EVITAR
<motion.div
  animate={{
    width: 500,
    height: 300,
    top: 100,
  }}
/>
```

### Optimización con layout

```typescript
// Para cambios de layout
<motion.div layout>
  Content
</motion.div>
```

## 🎯 Casos de Uso del Proyecto

### Hero Section - Partículas

```typescript
{[...Array(20)].map((_, i) => (
  <motion.div
    key={i}
    className="particle"
    animate={{
      y: [0, -30, 0],
      opacity: [0.2, 1, 0.2],
    }}
    transition={{
      duration: 3 + Math.random() * 2,
      repeat: Infinity,
      delay: Math.random() * 2,
    }}
  />
))}
```

### Tech Cards - Entrance

```typescript
<motion.div
  initial={{ opacity: 0, y: 50, scale: 0.9 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.6 }}
  whileHover={{ scale: 1.05 }}
>
  Card content
</motion.div>
```

## 📚 Referencias

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Motion Examples](https://www.framer.com/motion/examples/)
- [Animation Recipes](https://www.framer.com/motion/animation/)

---

**Pro Tip**: Siempre usa `transform` y `opacity` para animaciones suaves a 60fps! 🚀

