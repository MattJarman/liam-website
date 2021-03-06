import { motion, useAnimation } from 'framer-motion'
import React, { useRef, useEffect } from 'react'
import { useOnScreen } from '../../hooks'

const IntroductionSection = () => {
  const introRef = useRef()

  const introOnScreen = useOnScreen(introRef)

  const introLeftControls = useAnimation()
  const introRightControls = useAnimation()

  useEffect(() => {
    if (introOnScreen) {
      introLeftControls.start({ opacity: 1, y: 0 })
      introRightControls.start({
        opacity: 1,
        x: 0,
        transition: { delay: 0.25 },
      })
    }
  }, [introOnScreen, introLeftControls, introRightControls])

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 md:py-32 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col sm:flex-row mt-10">
            <motion.div
              ref={introRef}
              initial={{ opacity: 0, y: 20 }}
              animate={introLeftControls}
              className="sm:w-1/3 text-center sm:pr-8 sm:py-8"
            >
              {/*<GatsbyImage*/}
              {/*  className="w-24 h-24 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"*/}
              {/*  image={gatsbyAvatar}*/}
              {/*  alt="Me"*/}
              {/*  loading="lazy"*/}
              {/*/>*/}
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Liam Jones
                </h2>
                <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
                <p className="text-base">Animator</p>
              </div>
            </motion.div>
            <motion.div
              ref={introRef}
              initial={{ opacity: 0, x: 20 }}
              animate={introRightControls}
              className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"
            >
            {/*  TODO: Set description from CMS*/}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroductionSection
