import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { courseCategories, getCoursesByCategory } from "@/data/courses";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { CheckCircle, ArrowRight, User, GraduationCap, Briefcase, Users } from "lucide-react";

const educationLevels = [
  "Primary School",
  "Secondary School (SSCE/WAEC)",
  "OND/NCE",
  "HND/BSc",
  "Masters/PhD",
  "No Formal Education",
];

const employmentStatuses = [
  "Employed (Full-time)",
  "Employed (Part-time)",
  "Self-employed",
  "Unemployed",
  "Student",
];

const supportTypes = [
  { id: "training", label: "Training Only" },
  { id: "training-financial", label: "Training + Financial Support" },
  { id: "training-materials", label: "Training + Raw Materials" },
  { id: "full-support", label: "Full Support Package" },
];

const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", "Gombe",
  "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara",
  "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
  "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
];

const Register = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [isCooperativeMember, setIsCooperativeMember] = useState<string>("");
  const [selectedSupport, setSelectedSupport] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Student form state
  const [studentForm, setStudentForm] = useState({
    fullName: "",
    gender: "",
    dob: "",
    phone: "",
    email: "",
    address: "",
    state: "",
    lga: "",
    educationLevel: "",
    employmentStatus: "",
  });

  // Cooperative form state
  const [coopForm, setCoopForm] = useState({
    coopName: "",
    yearEstablished: "",
    members: "",
    areaOfFocus: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    additionalInfo: "",
  });
  const [coopSupport, setCoopSupport] = useState<string[]>([]);

  const availableCourses = selectedCategory ? getCoursesByCategory(selectedCategory) : [];

  const handleCourseToggle = (courseId: string) => {
    setSelectedCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const handleSupportToggle = (supportId: string) => {
    setSelectedSupport((prev) =>
      prev.includes(supportId)
        ? prev.filter((id) => id !== supportId)
        : [...prev, supportId]
    );
  };

  const handleCoopSupportToggle = (support: string) => {
    setCoopSupport((prev) =>
      prev.includes(support)
        ? prev.filter((s) => s !== support)
        : [...prev, support]
    );
  };

  const handleStudentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedCategory || selectedCourses.length === 0) {
      toast.error("Please select a training category and at least one course.");
      return;
    }

    if (selectedSupport.length === 0) {
      toast.error("Please select at least one type of support needed.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from("student_registrations").insert({
        full_name: studentForm.fullName,
        gender: studentForm.gender,
        date_of_birth: studentForm.dob || null,
        phone_number: studentForm.phone,
        email: studentForm.email,
        residential_address: studentForm.address,
        state: studentForm.state,
        lga: studentForm.lga,
        category: selectedCategory,
        selected_course: selectedCourses.join(", "),
        education_level: studentForm.educationLevel,
        employment_status: studentForm.employmentStatus,
        is_cooperative_member: isCooperativeMember === "yes",
        support_needed: selectedSupport,
      });

      if (error) throw error;

      toast.success("Registration submitted successfully! We will contact you soon.");
      
      // Reset form
      setStudentForm({
        fullName: "",
        gender: "",
        dob: "",
        phone: "",
        email: "",
        address: "",
        state: "",
        lga: "",
        educationLevel: "",
        employmentStatus: "",
      });
      setSelectedCategory("");
      setSelectedCourses([]);
      setIsCooperativeMember("");
      setSelectedSupport([]);
    } catch (error) {
      console.error("Error submitting registration:", error);
      toast.error("Failed to submit registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCooperativeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (coopSupport.length === 0) {
      toast.error("Please select at least one type of support needed.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from("cooperative_registrations").insert({
        cooperative_name: coopForm.coopName,
        year_established: coopForm.yearEstablished ? parseInt(coopForm.yearEstablished) : null,
        area_of_focus: coopForm.areaOfFocus,
        number_of_members: coopForm.members ? parseInt(coopForm.members) : null,
        contact_person: coopForm.contactName,
        phone_number: coopForm.contactPhone,
        email: coopForm.contactEmail,
        support_needed: coopSupport,
      });

      if (error) throw error;

      toast.success("Cooperative registration submitted! Our team will reach out shortly.");
      
      // Reset form
      setCoopForm({
        coopName: "",
        yearEstablished: "",
        members: "",
        areaOfFocus: "",
        contactName: "",
        contactPhone: "",
        contactEmail: "",
        additionalInfo: "",
      });
      setCoopSupport([]);
    } catch (error) {
      console.error("Error submitting cooperative registration:", error);
      toast.error("Failed to submit registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">Registration</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Register for Our Training Programs
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Take the first step towards acquiring new skills for a sustainable
              livelihood. Choose from our range of agricultural, tech, business, and
              vocational training programs.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Forms */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 h-auto">
              <TabsTrigger
                value="student"
                className="py-4 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <User className="w-5 h-5 mr-2" />
                Student Registration
              </TabsTrigger>
              <TabsTrigger
                value="cooperative"
                className="py-4 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Users className="w-5 h-5 mr-2" />
                Cooperative Registration
              </TabsTrigger>
            </TabsList>

            {/* Student Registration Form */}
            <TabsContent value="student">
              <form onSubmit={handleStudentSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-soft">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      Personal Information
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={studentForm.fullName}
                        onChange={(e) => setStudentForm({ ...studentForm, fullName: e.target.value })}
                        placeholder="Enter your full name"
                        required
                        className="mt-1.5"
                      />
                    </div>

                    <div>
                      <Label htmlFor="gender">Gender *</Label>
                      <Select 
                        value={studentForm.gender}
                        onValueChange={(value) => setStudentForm({ ...studentForm, gender: value })}
                        required
                      >
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input 
                        id="dob" 
                        type="date" 
                        value={studentForm.dob}
                        onChange={(e) => setStudentForm({ ...studentForm, dob: e.target.value })}
                        className="mt-1.5" 
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={studentForm.phone}
                        onChange={(e) => setStudentForm({ ...studentForm, phone: e.target.value })}
                        placeholder="+234 800 000 0000"
                        required
                        className="mt-1.5"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={studentForm.email}
                        onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })}
                        placeholder="your@email.com"
                        required
                        className="mt-1.5"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="address">Residential Address</Label>
                      <Input
                        id="address"
                        value={studentForm.address}
                        onChange={(e) => setStudentForm({ ...studentForm, address: e.target.value })}
                        placeholder="Enter your full address"
                        className="mt-1.5"
                      />
                    </div>

                    <div>
                      <Label htmlFor="state">State</Label>
                      <Select 
                        value={studentForm.state}
                        onValueChange={(value) => setStudentForm({ ...studentForm, state: value })}
                      >
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          {nigerianStates.map((state) => (
                            <SelectItem key={state} value={state.toLowerCase()}>
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="lga">LGA</Label>
                      <Input
                        id="lga"
                        value={studentForm.lga}
                        onChange={(e) => setStudentForm({ ...studentForm, lga: e.target.value })}
                        placeholder="Enter your LGA"
                        className="mt-1.5"
                      />
                    </div>
                  </div>
                </div>

                {/* Training Information */}
                <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-soft">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      Training Information
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label>Select Training Category *</Label>
                      <Select
                        value={selectedCategory}
                        onValueChange={(value) => {
                          setSelectedCategory(value);
                          setSelectedCourses([]);
                        }}
                      >
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Choose a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {courseCategories.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {selectedCategory && availableCourses.length > 0 && (
                      <div>
                        <Label className="mb-3 block">
                          Select Courses (Choose one or more) *
                        </Label>
                        <div className="grid sm:grid-cols-2 gap-3 max-h-64 overflow-y-auto p-1">
                          {availableCourses.map((course) => (
                            <label
                              key={course.id}
                              htmlFor={`course-${course.id}`}
                              className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                                selectedCourses.includes(course.id)
                                  ? "border-primary bg-primary/5"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              <Checkbox
                                id={`course-${course.id}`}
                                checked={selectedCourses.includes(course.id)}
                                onCheckedChange={() => handleCourseToggle(course.id)}
                              />
                              <span className="text-sm text-foreground">
                                {course.name}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Background Information */}
                <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-soft">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      Background Information
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label>Education Level</Label>
                        <Select 
                          value={studentForm.educationLevel}
                          onValueChange={(value) => setStudentForm({ ...studentForm, educationLevel: value })}
                        >
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Select education level" />
                          </SelectTrigger>
                          <SelectContent>
                            {educationLevels.map((level) => (
                              <SelectItem key={level} value={level.toLowerCase()}>
                                {level}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Employment Status</Label>
                        <Select 
                          value={studentForm.employmentStatus}
                          onValueChange={(value) => setStudentForm({ ...studentForm, employmentStatus: value })}
                        >
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            {employmentStatuses.map((status) => (
                              <SelectItem key={status} value={status.toLowerCase()}>
                                {status}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label className="mb-3 block">
                        Are you a member of a cooperative society?
                      </Label>
                      <RadioGroup
                        value={isCooperativeMember}
                        onValueChange={setIsCooperativeMember}
                        className="flex gap-6"
                      >
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="yes" id="coop-yes" />
                          <Label htmlFor="coop-yes" className="font-normal cursor-pointer">
                            Yes
                          </Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="no" id="coop-no" />
                          <Label htmlFor="coop-no" className="font-normal cursor-pointer">
                            No
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="mb-3 block">Support Needed *</Label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {supportTypes.map((support) => (
                          <label
                            key={support.id}
                            htmlFor={`support-${support.id}`}
                            className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${
                              selectedSupport.includes(support.id)
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <Checkbox
                              id={`support-${support.id}`}
                              checked={selectedSupport.includes(support.id)}
                              onCheckedChange={() => handleSupportToggle(support.id)}
                            />
                            <span className="text-sm text-foreground">{support.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Registration
                      <ArrowRight size={20} />
                    </>
                  )}
                </Button>
              </form>
            </TabsContent>

            {/* Cooperative Registration Form */}
            <TabsContent value="cooperative">
              <form onSubmit={handleCooperativeSubmit} className="space-y-8">
                <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-soft">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      Cooperative Information
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <Label htmlFor="coopName">Cooperative Name *</Label>
                      <Input
                        id="coopName"
                        value={coopForm.coopName}
                        onChange={(e) => setCoopForm({ ...coopForm, coopName: e.target.value })}
                        placeholder="Enter cooperative name"
                        required
                        className="mt-1.5"
                      />
                    </div>

                    <div>
                      <Label htmlFor="yearEstablished">Year Established</Label>
                      <Input
                        id="yearEstablished"
                        type="number"
                        min="1900"
                        max={new Date().getFullYear()}
                        value={coopForm.yearEstablished}
                        onChange={(e) => setCoopForm({ ...coopForm, yearEstablished: e.target.value })}
                        placeholder="e.g., 2015"
                        className="mt-1.5"
                      />
                    </div>

                    <div>
                      <Label htmlFor="members">Number of Members</Label>
                      <Input
                        id="members"
                        type="number"
                        min="1"
                        value={coopForm.members}
                        onChange={(e) => setCoopForm({ ...coopForm, members: e.target.value })}
                        placeholder="e.g., 50"
                        className="mt-1.5"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label>Area of Focus *</Label>
                      <Select 
                        value={coopForm.areaOfFocus}
                        onValueChange={(value) => setCoopForm({ ...coopForm, areaOfFocus: value })}
                        required
                      >
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Select primary focus" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="agriculture">Agriculture</SelectItem>
                          <SelectItem value="trade">Trading & Commerce</SelectItem>
                          <SelectItem value="production">Production & Manufacturing</SelectItem>
                          <SelectItem value="services">Service Delivery</SelectItem>
                          <SelectItem value="mixed">Mixed/Multi-purpose</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Contact Person */}
                <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-soft">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      Contact Person
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <Label htmlFor="contactName">Contact Person Name *</Label>
                      <Input
                        id="contactName"
                        value={coopForm.contactName}
                        onChange={(e) => setCoopForm({ ...coopForm, contactName: e.target.value })}
                        placeholder="Enter contact person's full name"
                        required
                        className="mt-1.5"
                      />
                    </div>

                    <div>
                      <Label htmlFor="contactPhone">Phone Number *</Label>
                      <Input
                        id="contactPhone"
                        type="tel"
                        value={coopForm.contactPhone}
                        onChange={(e) => setCoopForm({ ...coopForm, contactPhone: e.target.value })}
                        placeholder="+234 800 000 0000"
                        required
                        className="mt-1.5"
                      />
                    </div>

                    <div>
                      <Label htmlFor="contactEmail">Email Address *</Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        value={coopForm.contactEmail}
                        onChange={(e) => setCoopForm({ ...coopForm, contactEmail: e.target.value })}
                        placeholder="contact@email.com"
                        required
                        className="mt-1.5"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label>Type of Support Needed *</Label>
                      <div className="grid sm:grid-cols-2 gap-3 mt-3">
                        {[
                          "Training for Members",
                          "Financial Support",
                          "Raw Materials",
                          "Market Access",
                          "Technical Assistance",
                          "Full Partnership",
                        ].map((support) => (
                          <label
                            key={support}
                            htmlFor={`coop-support-${support}`}
                            className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                              coopSupport.includes(support)
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <Checkbox 
                              id={`coop-support-${support}`} 
                              checked={coopSupport.includes(support)}
                              onCheckedChange={() => handleCoopSupportToggle(support)}
                            />
                            <span className="font-normal text-sm text-foreground">
                              {support}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Textarea
                        id="additionalInfo"
                        value={coopForm.additionalInfo}
                        onChange={(e) => setCoopForm({ ...coopForm, additionalInfo: e.target.value })}
                        placeholder="Tell us more about your cooperative and how we can help..."
                        className="mt-1.5 min-h-[120px]"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Cooperative Registration
                      <ArrowRight size={20} />
                    </>
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          {/* What Happens Next */}
          <div className="mt-12 bg-secondary p-6 md:p-8 rounded-2xl">
            <h4 className="font-display text-xl font-semibold text-foreground mb-4">
              What Happens Next?
            </h4>
            <div className="space-y-4">
              {[
                "Our team will review your registration within 2-3 business days",
                "You will receive a confirmation email with further instructions",
                "A program coordinator will contact you to discuss your training schedule",
                "You will be enrolled in your selected courses and receive course materials",
              ].map((step, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
