import React from "react";
import { View, ScrollView } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { Text } from "~/components/ui/text";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import {
  ArrowLeft,
  Code,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Settings,
  Star,
  Clock,
  DollarSign,
  CheckCircle,
  Users,
  Award,
} from "lucide-react-native";

const getServiceDetails = (id: string) => {
  const services = {
    "web-development": {
      id: "web-development",
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      icon: Globe,
      price: "Starting at $2,000",
      duration: "2-6 weeks",
      rating: 4.9,
      completedProjects: 25,
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Mobile First",
        "Cross-browser Compatible",
        "Accessibility Compliant",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
      ],
      process: [
        "Requirements Analysis",
        "UI/UX Design",
        "Development",
        "Testing & QA",
        "Deployment",
        "Support",
      ],
      portfolio: [
        { name: "E-commerce Platform", client: "RetailCorp" },
        { name: "Corporate Website", client: "TechStart" },
        { name: "Portfolio Site", client: "Creative Agency" },
      ],
    },
    "mobile-development": {
      id: "mobile-development",
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications for iOS and Android using React Native, delivering native performance with code reusability.",
      icon: Smartphone,
      price: "Starting at $5,000",
      duration: "4-12 weeks",
      rating: 4.8,
      completedProjects: 18,
      features: [
        "Cross Platform",
        "Native Performance",
        "App Store Ready",
        "Push Notifications",
        "Offline Support",
        "Real-time Features",
      ],
      technologies: [
        "React Native",
        "TypeScript",
        "Firebase",
        "Expo",
        "Redux",
        "AsyncStorage",
      ],
      process: [
        "App Strategy",
        "Wireframing",
        "Development",
        "Testing",
        "App Store Submission",
        "Maintenance",
      ],
      portfolio: [
        { name: "Food Delivery App", client: "QuickEats" },
        { name: "Fitness Tracker", client: "FitLife" },
        { name: "Social Media App", client: "ConnectHub" },
      ],
    },
    "backend-development": {
      id: "backend-development",
      title: "Backend Development",
      description:
        "Scalable server-side applications with robust APIs, database design, and cloud infrastructure for high-performance systems.",
      icon: Database,
      price: "Starting at $3,000",
      duration: "3-8 weeks",
      rating: 4.9,
      completedProjects: 32,
      features: [
        "RESTful APIs",
        "Database Design",
        "Authentication",
        "Real-time Features",
        "Microservices",
        "Performance Optimization",
      ],
      technologies: [
        "Node.js",
        "PostgreSQL",
        "MongoDB",
        "GraphQL",
        "Redis",
        "Docker",
      ],
      process: [
        "Architecture Design",
        "Database Modeling",
        "API Development",
        "Security Implementation",
        "Testing",
        "Deployment",
      ],
      portfolio: [
        { name: "API Gateway", client: "DataFlow" },
        { name: "Analytics Platform", client: "InsightCorp" },
        { name: "Payment System", client: "FinTech Solutions" },
      ],
    },
    "cloud-deployment": {
      id: "cloud-deployment",
      title: "Cloud Deployment",
      description:
        "Professional cloud deployment and DevOps services to ensure your applications are scalable, secure, and highly available.",
      icon: Cloud,
      price: "Starting at $800",
      duration: "1-2 weeks",
      rating: 4.7,
      completedProjects: 40,
      features: [
        "Auto Scaling",
        "Load Balancing",
        "CI/CD Pipeline",
        "Monitoring",
        "Security",
        "Backup & Recovery",
      ],
      technologies: [
        "AWS",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "Terraform",
        "Nginx",
      ],
      process: [
        "Infrastructure Planning",
        "Environment Setup",
        "Pipeline Configuration",
        "Security Setup",
        "Monitoring",
        "Documentation",
      ],
      portfolio: [
        { name: "E-commerce Infrastructure", client: "ShopMax" },
        { name: "SaaS Platform", client: "CloudTech" },
        { name: "Media Streaming", client: "StreamCo" },
      ],
    },
    "custom-development": {
      id: "custom-development",
      title: "Custom Development",
      description:
        "Tailored software solutions designed specifically for your unique business requirements and challenges.",
      icon: Code,
      price: "Quote on request",
      duration: "Varies",
      rating: 5.0,
      completedProjects: 15,
      features: [
        "Custom Solutions",
        "Integration",
        "Consultation",
        "Support",
        "Scalability",
        "Future-proof",
      ],
      technologies: [
        "Various",
        "As needed",
        "Best practices",
        "Industry standards",
        "Modern frameworks",
        "Cutting-edge tools",
      ],
      process: [
        "Discovery Phase",
        "Solution Design",
        "Proof of Concept",
        "Development",
        "Integration",
        "Long-term Support",
      ],
      portfolio: [
        { name: "Inventory Management", client: "LogisticsPro" },
        { name: "CRM Integration", client: "SalesTech" },
        { name: "IoT Dashboard", client: "SmartDevices" },
      ],
    },
    maintenance: {
      id: "maintenance",
      title: "Maintenance & Support",
      description:
        "Comprehensive ongoing maintenance and support services to keep your applications running smoothly and up-to-date.",
      icon: Settings,
      price: "Starting at $500/month",
      duration: "Ongoing",
      rating: 4.8,
      completedProjects: 60,
      features: [
        "Bug Fixes",
        "Updates",
        "Performance",
        "24/7 Support",
        "Security Patches",
        "Feature Enhancements",
      ],
      technologies: [
        "All platforms",
        "Monitoring tools",
        "Analytics",
        "Testing",
        "Security tools",
        "Performance tools",
      ],
      process: [
        "Health Assessment",
        "Monitoring Setup",
        "Regular Updates",
        "Performance Reviews",
        "Security Audits",
        "Continuous Improvement",
      ],
      portfolio: [
        { name: "E-commerce Maintenance", client: "OnlineStore" },
        { name: "SaaS Support", client: "ProductivityApp" },
        { name: "Mobile App Support", client: "TravelApp" },
      ],
    },
  };

  return services[id as keyof typeof services];
};

export default function ServiceDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const service = getServiceDetails(id);

  if (!service) {
    return (
      <View className='flex-1 justify-center items-center bg-background'>
        <Text className='text-lg text-muted-foreground'>Service not found</Text>
        <Button
          variant='outline'
          className='mt-4'
          onPress={() => router.back()}
        >
          <Text>Go Back</Text>
        </Button>
      </View>
    );
  }

  const IconComponent = service.icon;

  return (
    <ScrollView className='flex-1 bg-background'>
      <View
        className='px-6'
        // style={{ paddingTop: Math.max(insets.top, 16) + 16 }}
      >
        {/* Header */}
        <View className='flex-row items-center mb-6 fixed top-2 z-10'>
          <Button
            variant='ghost'
            size='sm'
            onPress={() => router.back()}
            className='mr-4'
          >
            <ArrowLeft size={20} />
          </Button>
          <Text className='text-2xl font-bold flex-1'>Service Details</Text>
        </View>

        {/* Service Overview */}
        <Card className='mb-6'>
          <CardHeader>
            <View className='flex-row items-center mb-4'>
              <View className='bg-primary/10 p-4 rounded-full mr-4'>
                <IconComponent className='text-primary' size={32} />
              </View>
              <View className='flex-1'>
                <CardTitle className='text-xl'>{service.title}</CardTitle>
                <View className='flex-row items-center mt-1'>
                  <Star className='text-yellow-500 mr-1' size={16} />
                  <Text className='text-sm text-muted-foreground mr-4'>
                    {service.rating} rating
                  </Text>
                  <Users className='text-muted-foreground mr-1' size={16} />
                  <Text className='text-sm text-muted-foreground'>
                    {service.completedProjects} projects
                  </Text>
                </View>
              </View>
            </View>
            <CardDescription className='text-base leading-6'>
              {service.description}
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <View className='flex-row items-center justify-between'>
              <View className='flex-row items-center'>
                <DollarSign className='text-green-600 mr-2' size={20} />
                <Text className='text-lg font-bold text-green-600'>
                  {service.price}
                </Text>
              </View>
              <View className='flex-row items-center'>
                <Clock className='text-muted-foreground mr-2' size={20} />
                <Text className='text-muted-foreground'>
                  {service.duration}
                </Text>
              </View>
            </View>
          </CardContent>
        </Card>

        {/* Features */}
        <Card className='mb-6'>
          <CardHeader>
            <CardTitle>What&apos;s Included</CardTitle>
          </CardHeader>
          <CardContent>
            <View className='space-y-3'>
              {service.features.map((feature, index) => (
                <View key={index} className='flex-row items-center'>
                  <CheckCircle className='text-green-600 mr-3' size={20} />
                  <Text className='flex-1'>{feature}</Text>
                </View>
              ))}
            </View>
          </CardContent>
        </Card>

        {/* Technologies */}
        <Card className='mb-6'>
          <CardHeader>
            <CardTitle>Technologies Used</CardTitle>
          </CardHeader>
          <CardContent>
            <View className='flex-row flex-wrap gap-2'>
              {service.technologies.map((tech, index) => (
                <View
                  key={index}
                  className='bg-primary/10 px-3 py-2 rounded-full'
                >
                  <Text className='text-sm text-primary font-medium'>
                    {tech}
                  </Text>
                </View>
              ))}
            </View>
          </CardContent>
        </Card>

        {/* Process */}
        <Card className='mb-6'>
          <CardHeader>
            <CardTitle>Our Process</CardTitle>
          </CardHeader>
          <CardContent>
            <View className='space-y-3'>
              {service.process.map((step, index) => (
                <View key={index} className='flex-row items-center'>
                  <View className='w-8 h-8 bg-primary rounded-full items-center justify-center mr-3'>
                    <Text className='text-primary-foreground font-bold text-sm'>
                      {index + 1}
                    </Text>
                  </View>
                  <Text className='flex-1'>{step}</Text>
                </View>
              ))}
            </View>
          </CardContent>
        </Card>

        {/* Portfolio */}
        <Card className='mb-6'>
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <View className='space-y-4'>
              {service.portfolio.map((project, index) => (
                <View
                  key={index}
                  className='flex-row items-center justify-between p-3 bg-secondary/50 rounded-lg'
                >
                  <View className='flex-row items-center'>
                    <Award className='text-primary mr-3' size={20} />
                    <View>
                      <Text className='font-medium'>{project.name}</Text>
                      <Text className='text-sm text-muted-foreground'>
                        {project.client}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <View className='space-y-3'>
          <Button className='w-full'>
            <Text className='text-primary-foreground font-medium'>
              Get Started
            </Text>
          </Button>
          <Button variant='outline' className='w-full'>
            <Text>Request Quote</Text>
          </Button>
          <Button variant='outline' className='w-full'>
            <Text>Schedule Consultation</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
