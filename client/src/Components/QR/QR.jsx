import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";

function QR() {
    const [url, setUrl] = useState("");
    return (
        <div>
            <Container sx={{ marginTop: 10 }}>
                <Card>
                    <Typography
                        variant="h2"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 2,
                            backgroundColor: "#6A9C89",
                            color: "#E9EFEC",
                        }}>
                        Generate and Download QR
                    </Typography>
                    <CardContent>
                        <Grid size={{ xl: 4, lg: 4, md: 6, sm: 12 }}>
                            <TextField
                                label="Enter text here"
                                onClick={() => setUrl(e.target.vaue)}
                                value={url}
                            />
                            <Button
                                variant="contained"
                                sx={{ marginTop: 10, marginBottom: 20 }}>
                                Generate QR Code
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}

export default QR;
