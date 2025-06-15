import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, User, Mail, CreditCard, Check } from 'lucide-react';

const StepperForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  // useRef to store step statuses - persists across re-renders without causing re-renders
  const stepStatusRef = useRef({
    0: { completed: false, data: {} },
    1: { completed: false, data: {} },
    2: { completed: false, data: {} },
  });

  // Form data for each step
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    
    email: '',
    phone: '',
    address: '',
    
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const steps = [
    {
      title: 'Personal Info',
      icon: User,
      fields: ['firstName', 'lastName', 'age']
    },
    {
      title: 'Contact Details',
      icon: Mail,
      fields: ['email', 'phone', 'address']
    },
    {
      title: 'Payment',
      icon: CreditCard,
      fields: ['cardNumber', 'expiryDate', 'cvv']
    }
  ];

  // Save current step status using useRef
  const saveStepStatus = (stepIndex, isCompleted = false) => {
    const stepFields = steps[stepIndex].fields;
    const stepData = {};
    
    stepFields.forEach(field => {
      stepData[field] = formData[field];
    });

    // Update the ref directly - no re-render triggered
    stepStatusRef.current[stepIndex] = {
      completed: isCompleted,
      data: stepData,
      timestamp: new Date().toISOString()
    };
    
    console.log('Step status saved to ref:', stepStatusRef.current[stepIndex]);
  };

  const handleNext = () => {
    // Save current step status before moving
    const isStepValid = validateCurrentStep();
    saveStepStatus(currentStep, isStepValid);
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    // Save current step status before moving
    saveStepStatus(currentStep, false);
    
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const validateCurrentStep = () => {
    const stepFields = steps[currentStep].fields;
    return stepFields.every(field => {
      if (typeof formData[field] === 'boolean') return true;
      return formData[field] && formData[field].toString().trim() !== '';
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    saveStepStatus(currentStep, true);
    console.log('All step statuses:', stepStatusRef.current);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="number"
              placeholder="Age"
              value={formData.age}
              onChange={(e) => handleInputChange('age', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Contact Details</h3>
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Address"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-20 resize-none"
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Payment Information</h3>
            <input
              type="text"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={(e) => handleInputChange('cardNumber', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="CVV"
                value={formData.cvv}
                onChange={(e) => handleInputChange('cvv', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
        useRef Stepper Form Demo
      </h1>
      
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isCompleted = stepStatusRef.current[index]?.completed;
          const isActive = index === currentStep;

          console.log("isCompleted: ", {
            isCompleted,
            stepStatusRef
          })
          
          return (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-200 ${
                  isCompleted
                    ? 'bg-green-500 text-white'
                    : isActive
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {isCompleted ? <Check size={20} /> : <Icon size={20} />}
              </div>
              <span className={`text-xs text-center ${isActive ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                {step.title}
              </span>
            </div>
          );
        })}
      </div>

      {/* Step Content */}
      <div className="min-h-64">
        {renderStepContent()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="flex items-center px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={20} className="mr-1" />
          Previous
        </button>

        {currentStep === steps.length - 1 ? (
          <button
            onClick={handleSubmit}
            className="flex items-center px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Submit Form
            <Check size={20} className="ml-1" />
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Next
            <ChevronRight size={20} className="ml-1" />
          </button>
        )}
      </div>
    </div>
  );
};

export default StepperForm;