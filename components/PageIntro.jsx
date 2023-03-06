import { motion } from 'framer-motion'

const letters = ['D', 'A', 'N', 'C', 'I', 'N', 'G']

export default function PageIntro() {
  return (
    <div className="flex h-[60vh] items-center justify-center  text-offWhite">
      {letters.map((letter) => (
        <p key={letter} className="text-[280px] font-bold">
          {letter}
        </p>
      ))}
    </div>
  )
}
