'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import CTAButton from './ui/CTAButton'

interface ContactFormData {
    fullName: string
    mobileNumber: string
    service: string
    preferredDate: string
    location: string
    message: string
}

const ContactForm = () => {
    const dateInputRef = useRef<HTMLInputElement>(null)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setError,
    } = useForm<ContactFormData>({
        defaultValues: {
            fullName: '',
            mobileNumber: '',
            service: '',
            preferredDate: '',
            location: '',
            message: '',
        },
    })

    const [submitStatus, setSubmitStatus] = React.useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })

    const onSubmit = async (data: ContactFormData) => {
        setSubmitStatus({ type: null, message: '' })

        try {
            const response = await fetch('https://om-shakthi.com/mail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    formType: 'contact',
                    fullName: data.fullName,
                    mobileNumber: data.mobileNumber,
                    service: data.service,
                    preferredDate: data.preferredDate,
                    location: data.location,
                    message: data.message || '',
                }),
            })

            const result = await response.json()

            if (!response.ok || !result.success) {
                throw new Error(result.error || 'Failed to submit form')
            }

            setSubmitStatus({ type: 'success', message: result.message || 'Your inquiry has been submitted successfully!' })
            reset()
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Failed to submit form. Please try again.'
            setSubmitStatus({ type: 'error', message: errorMessage })
            setError('root', { message: errorMessage })
        }
    }

    return (
        <section id="contact" className="w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-visible">
            <div className="relative z-10 mx-auto max-w-6xl">
                {/* Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm mb-8 ring ring-neutral-300 ring-offset-2 md:ring-offset-4"
                >
                    <div className="size-3 rounded bg-yellow-400 animate-pulse border border-neutral-300" />
                    <span className="text-sm md:text-base font-generalsans font-medium text-neutral-700">
                        Contact Us
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-clashdisplay font-light text-neutral-900 text-left  mb-6 sm:mb-8 md:mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Book Your Exhibition, Interior, or Technical Services :<br /> <span className='text-neutral-600 font-normal'>Begin Your Journey.</span>
                </motion.h2>

                {/* Description */}
                <motion.p
                    className="text-lg sm:text-xl md:text-2xl font-generalsans text-gray-700 text-left mb-8 sm:mb-10 md:mb-12 max-w-6xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                        <strong>SVRS Technical Services</strong> is a trusted exhibition, interior, and technical services provider in Dubai. We offer a wide range of services including <strong>exhibition stands, event decoration, office interiors, custom furniture, woodwork, and all interior solutions.</strong> We're here to help bring your vision to life across Dubai & UAE.
                </motion.p>

                {/* Form */}
                <motion.div
                    className="relative mx-auto w-full border border-neutral-200 rounded-xl ring ring-neutral-300 ring-offset-4 md:ring-offset-8 bg-white overflow-hidden shadow-2xl shadow-neutral-100"
                    style={{ backgroundColor: 'white' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {/* Dashed Top Fade Grid Background */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: `
                                linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                                linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
                            `,
                            backgroundSize: "1px 1px",
                            backgroundPosition: "0 0, 0 0",
                            maskImage: `
                                repeating-linear-gradient(
                                    to right,
                                    black 0px,
                                    black 3px,
                                    transparent 3px,
                                    transparent 8px
                                ),
                                repeating-linear-gradient(
                                    to bottom,
                                    black 0px,
                                    black 3px,
                                    transparent 3px,
                                    transparent 8px
                                ),
                                radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 80%)
                            `,
                            WebkitMaskImage: `
                                repeating-linear-gradient(
                                    to right,
                                    black 0px,
                                    black 3px,
                                    transparent 3px,
                                    transparent 8px
                                ),
                                repeating-linear-gradient(
                                    to bottom,
                                    black 0px,
                                    black 3px,
                                    transparent 3px,
                                    transparent 8px
                                ),
                                radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 80%)
                            `,
                            maskComposite: "intersect",
                            WebkitMaskComposite: "source-in",
                        }}
                    />
                    
                    {/* Content wrapper - ensures form is visible */}
                    <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Full Name */}
                        <div>
                            <label htmlFor="fullName" className="block text-sm sm:text-base font-generalsans font-semibold text-gray-900 mb-2">
                                Full Name <span className="text-blue-600">*</span>
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                {...register('fullName', { required: 'Full Name is required' })}
                                className={`w-full px-4 py-3 border rounded-lg bg-white focus:ring focus:ring-neutral-300 focus:ring-offset-2 focus:border-neutral-200  outline-none transition-all font-generalsans text-gray-900 text-base sm:text-lg ${errors.fullName ? 'border-red-300' : 'border-gray-300'
                                    }`}
                                placeholder="Enter your full name"
                            />
                            {errors.fullName && (
                                <p className="mt-1 text-sm text-red-600 font-generalsans">{errors.fullName.message}</p>
                            )}
                        </div>

                        {/* Mobile Number */}
                        <div>
                            <label htmlFor="mobileNumber" className="block text-sm sm:text-base font-generalsans font-semibold text-gray-900 mb-2">
                                Mobile Number <span className="text-blue-600">*</span>
                            </label>
                            <input
                                type="tel"
                                id="mobileNumber"
                                {...register('mobileNumber', {
                                    required: 'Mobile Number is required',
                                    pattern: {
                                        value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
                                        message: 'Please enter a valid mobile number',
                                    },
                                })}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring focus:ring-neutral-300 focus:ring-offset-2 focus:border-neutral-200  bg-white outline-none transition-all font-generalsans text-gray-900 text-base sm:text-lg ${errors.mobileNumber ? 'border-red-300' : 'border-gray-300'
                                    }`}
                                placeholder="Enter your mobile number"
                            />
                            {errors.mobileNumber && (
                                <p className="mt-1 text-sm text-red-600 font-generalsans">{errors.mobileNumber.message}</p>
                            )}
                        </div>

                        {/* Service Dropdown */}
                        <div>
                            <label htmlFor="service" className="block text-sm sm:text-base font-generalsans font-semibold text-gray-900 mb-2">
                                Service <span className="text-blue-600">*</span>
                            </label>
                            <select
                                id="service"
                                {...register('service', { required: 'Service is required' })}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring focus:ring-neutral-300 focus:ring-offset-2 focus:border-neutral-200  bg-white outline-none transition-all font-generalsans text-gray-900 text-base sm:text-lg ${errors.service ? 'border-red-300' : 'border-gray-300'
                                    }`}
                            >
                                <option value="">Select a service</option>
                                <option value="Exhibition Stand Building">Exhibition Stand Building</option>
                                <option value="Wood Work">Wood Work</option>
                                <option value="Event Decoration">Event Decoration</option>
                                <option value="Office Interior">Office Interior</option>
                                <option value="Furniture">Furniture</option>
                                <option value="Interior Design">Interior Design</option>
                                <option value="Painting Services">Painting Services</option>
                                <option value="Complete Interior Solutions">Complete Interior Solutions</option>
                                <option value="Others">Others</option>
                            </select>
                            {errors.service && (
                                <p className="mt-1 text-sm text-red-600 font-generalsans">{errors.service.message}</p>
                            )}
                        </div>

                        {/* Preferred Date */}
                        <div>
                            <label htmlFor="serviceDate" className="block text-sm sm:text-base font-generalsans font-semibold text-gray-900 mb-2">
                                Preferred Date <span className="text-blue-600">*</span>
                            </label>
                            <div
                                className="relative cursor-pointer"
                                onClick={() => dateInputRef.current?.showPicker?.() || dateInputRef.current?.focus()}
                            >
                                <input
                                    type="date"
                                    id="preferredDate"
                                    {...register('preferredDate', { required: 'Preferred Date is required' })}
                                    ref={(e) => {
                                        const { ref: registerRef } = register('preferredDate')
                                        registerRef(e)
                                        if (dateInputRef && e) {
                                            dateInputRef.current = e
                                        }
                                    }}
                                    min={new Date().toISOString().split('T')[0]}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring focus:ring-neutral-300 focus:ring-offset-2 focus:border-neutral-200  bg-white outline-none transition-all font-generalsans text-gray-900 text-base sm:text-lg cursor-pointer ${errors.preferredDate ? 'border-red-300' : 'border-gray-300'
                                        }`}
                                    style={{ cursor: 'pointer' }}
                                />
                            </div>
                                {errors.preferredDate && (
                                <p className="mt-1 text-sm text-red-600 font-generalsans">{errors.preferredDate.message}</p>
                            )}
                        </div>

                        {/* Location */}
                        <div>
                            <label htmlFor="location" className="block text-sm sm:text-base font-generalsans font-semibold text-gray-900 mb-2">
                                Location <span className="text-blue-600">*</span>
                            </label>
                            <input
                                type="text"
                                id="location"
                                {...register('location', { required: 'Location is required' })}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring focus:ring-neutral-300 focus:ring-offset-2 focus:border-neutral-200  bg-white outline-none transition-all font-generalsans text-gray-900 text-base sm:text-lg ${errors.location ? 'border-red-300' : 'border-gray-300'
                                    }`}
                                placeholder="Enter your location (e.g., Dubai, UAE)"
                            />
                            {errors.location && (
                                <p className="mt-1 text-sm text-red-600 font-generalsans">{errors.location.message}</p>
                            )}
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm sm:text-base font-generalsans font-semibold text-gray-900 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                {...register('message')}
                                rows={5}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-neutral-300 focus:ring-offset-2 focus:border-neutral-200  bg-white outline-none transition-all font-generalsans text-gray-900 text-base sm:text-lg resize-none"
                                placeholder="Any additional details or special requests..."
                            />
                        </div>

                        {/* Submit Status Message */}
                        {submitStatus.type && (
                            <div
                                className={`p-4 rounded-lg ${submitStatus.type === 'success'
                                    ? 'bg-green-50 text-green-800 border border-green-200'
                                    : 'bg-red-50 text-red-800 border border-red-200'
                                    }`}
                            >
                                <p className="font-generalsans text-sm sm:text-base">{submitStatus.message}</p>
                            </div>
                        )}

                        {/* Root Error */}
                        {errors.root && (
                            <div className="p-4 rounded-lg bg-red-50 text-red-800 border border-red-200">
                                <p className="font-generalsans text-sm sm:text-base">{errors.root.message}</p>
                            </div>
                        )}

                        {/* Submit Button */}
                        <div className="pt-4 flex justify-end">
                            <CTAButton
                                label="Submit Your Request"
                                onClick={() => handleSubmit(onSubmit)}
                                variant="dark"
                                className="font-generalsans bg-linear-to-r from-neutral-500 to-neutral-800 cursor-pointer ring ring-neutral-300 text-white ring-offset-2 md:ring-offset-4 ring-offset-neutral-100"
                            />
                        </div>
                    </form>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactForm;
