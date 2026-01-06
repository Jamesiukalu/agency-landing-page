import { 
    Container, 
    Typography, 
    Box, 
    TextField, 
    Button, 
    Grid,
    Card,
    CardContent,
    Stack
} from "@mui/material";
import { MotionBox, fadeUp } from "../components/Motion";
import { useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        budget: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
        alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
        // Reset form
        setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            projectType: "",
            budget: "",
            message: "",
        });
    };

    const contactInfo = [
        {
            icon: EmailIcon,
            title: "Email Us",
            detail: "hello@webcraftstudio.com",
            link: "mailto:hello@webcraftstudio.com"
        },
        {
            icon: PhoneIcon,
            title: "Call Us",
            detail: "+1 (555) 123-4567",
            link: "tel:+15551234567"
        },
        {
            icon: LocationOnIcon,
            title: "Visit Us",
            detail: "123 Business St, Tech City, TC 12345",
            link: null
        },
        {
            icon: AccessTimeIcon,
            title: "Business Hours",
            detail: "Mon-Fri: 9AM - 6PM",
            link: null
        }
    ];

    return (
        <Box sx={{ py: 8 }}>
            <Container maxWidth="md">
                {/* Header */}
                <MotionBox
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    sx={{ textAlign: "center", mb: 6 }}
                >
                    <Typography variant="h3" fontWeight={700} gutterBottom>
                        Get Your Free Quote
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: "auto" }}>
                        Ready to start your project? Fill out the form below and we'll get back to you 
                        within 24 hours with a custom quote.
                    </Typography>
                </MotionBox>

                {/* Contact Form */}
                <MotionBox
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                >
                    <Box
                        sx={{
                            maxWidth: 600,
                            mx: "auto",
                            p: 5,
                            borderRadius: 3,
                            background: "rgba(255,255,255,0.02)",
                            border: "1px solid rgba(255,255,255,0.08)",
                        }}
                    >
                        <Typography variant="h5" fontWeight={600} gutterBottom textAlign="center">
                            Project Details
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 4, textAlign: "center" }}>
                            Tell us about your project and we'll provide a detailed quote
                        </Typography>

                        <form onSubmit={handleSubmit}>
                            <Stack spacing={3}>
                                <TextField
                                    fullWidth
                                    placeholder="Full Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 3,
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                        }
                                    }}
                                />
                                
                                <TextField
                                    fullWidth
                                    placeholder="Email Address"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 3,
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                        }
                                    }}
                                />
                                
                                <TextField
                                    fullWidth
                                    placeholder="Phone Number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 3,
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                        }
                                    }}
                                />
                                
                                <TextField
                                    fullWidth
                                    placeholder="Company Name"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 3,
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                        }
                                    }}
                                />
                                
                                <TextField
                                    fullWidth
                                    select
                                    placeholder="Project Type"
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    required
                                    SelectProps={{
                                        native: true,
                                        displayEmpty: true,
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 3,
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                        }
                                    }}
                                >
                                    <option value="">Project Type</option>
                                    <option value="business-website">Business Website</option>
                                    <option value="ecommerce">E-Commerce Store</option>
                                    <option value="web-app">Web Application</option>
                                    <option value="portfolio">Portfolio Website</option>
                                    <option value="mvp">Startup MVP</option>
                                    <option value="other">Other</option>
                                </TextField>
                                
                                <TextField
                                    fullWidth
                                    select
                                    placeholder="Budget Range"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    SelectProps={{
                                        native: true,
                                        displayEmpty: true,
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 3,
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                        }
                                    }}
                                >
                                    <option value="">Budget Range</option>
                                    <option value="under-5k">Under $5,000</option>
                                    <option value="5k-10k">$5,000 - $10,000</option>
                                    <option value="10k-25k">$10,000 - $25,000</option>
                                    <option value="25k-50k">$25,000 - $50,000</option>
                                    <option value="50k-plus">$50,000+</option>
                                </TextField>
                                
                                <TextField
                                    fullWidth
                                    placeholder="Project Description"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    multiline
                                    rows={4}
                                    required
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 3,
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                        }
                                    }}
                                />
                                
                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    sx={{
                                        py: 1.5,
                                        borderRadius: 3,
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                    }}
                                >
                                    Request Free Quote
                                </Button>
                            </Stack>
                        </form>
                    </Box>
                </MotionBox>

                {/* Contact Information */}
                <MotionBox
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.4 }}
                    sx={{ mt: 8 }}
                >
                    <Typography variant="h5" fontWeight={600} gutterBottom textAlign="center">
                        Contact Information
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
                        Have questions? Reach out to us directly
                    </Typography>

                    <Stack spacing={3} sx={{ maxWidth: 600, mx: "auto" }}>
                        {contactInfo.map((info, index) => {
                            const IconComponent = info.icon;
                            return (
                                <Box
                                    key={index}
                                    sx={{
                                        p: 3,
                                        borderRadius: 2,
                                        background: "rgba(255,255,255,0.02)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 48,
                                            height: 48,
                                            borderRadius: 2,
                                            background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(16,185,129,0.2))',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                        }}
                                    >
                                        <IconComponent sx={{ color: 'primary.main' }} />
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" color="text.secondary" gutterBottom>
                                            {info.title}
                                        </Typography>
                                        {info.link ? (
                                            <Typography
                                                variant="body1"
                                                fontWeight={600}
                                                component="a"
                                                href={info.link}
                                                sx={{
                                                    textDecoration: 'none',
                                                    color: 'inherit',
                                                    '&:hover': { color: 'primary.main' }
                                                }}
                                            >
                                                {info.detail}
                                            </Typography>
                                        ) : (
                                            <Typography variant="body1" fontWeight={600}>
                                                {info.detail}
                                            </Typography>
                                        )}
                                    </Box>
                                </Box>
                            );
                        })}
                    </Stack>
                </MotionBox>
            </Container>
        </Box>
    );
}
