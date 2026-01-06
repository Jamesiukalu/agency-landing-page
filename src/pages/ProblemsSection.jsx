// src/pages/home/ProblemsSection.tsx
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";
import { MotionBox, fadeUp } from "../components/Motion";

const problems = [
    "Outdated or no online presence",
    "Losing customers to competitors",
    "Difficult to manage website",
    "Not mobile-friendly or slow",
];

export default function ProblemsSection() {
    return (
        <Container maxWidth="lg" sx={{ py: 10 }}>
            <Typography variant="h4" fontWeight={600} gutterBottom>
                Don't Let Poor Digital Presence Hold You Back
            </Typography>
            
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 700 }}>
                Many SMEs and startups struggle with establishing a professional online presence that drives business growth.
            </Typography>

            <Grid container spacing={3} sx={{ mt: 3 }}>
                {problems.map((text, i) => (
                    <Grid item xs={12} sm={6} md={3} key={i}>
                        <MotionBox
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card elevation={3} sx={{ height: '100%' }}>
                                <CardContent>
                                    <Typography>{text}</Typography>
                                </CardContent>
                            </Card>
                        </MotionBox>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
