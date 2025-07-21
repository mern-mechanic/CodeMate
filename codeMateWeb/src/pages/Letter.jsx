import React, { useState } from 'react';
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFDownloadLink,
    Image,
    PDFViewer,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 40,
        fontSize: 11,
        lineHeight: 1.4,
        fontFamily: 'Helvetica',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        width: '100%',
    },
    logo: {
        width: 130,
        height: 70,
    },
    companyInfo: {
        textAlign: 'right',
        fontSize: 11,
        color: '#000',
        flex: 1,
        marginLeft: 32,
    },
    companyName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    // New styles for the info rows
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
        width: '100%',
    },
    infoLabel: {
        fontWeight: 'bold',
        minWidth: 60, // Ensures consistent spacing
    },
    infoValue: {
        textAlign: 'right',
        flex: 1,
        marginLeft: 10,
    },
    redLineThin: {
        height: 1,
        backgroundColor: '#8B2635',
        marginBottom: 2,
    },
    redLine: {
        height: 4,
        backgroundColor: '#8B2635',
        marginBottom: 24,
    },
    date: {
        fontWeight: 'bold',
        fontSize: 10,
        marginBottom: 32,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 32,
        textDecoration: 'underline',
    },
    employeeInfo: {
        marginBottom: 24,
    },
    employeeName: {
        fontWeight: 'bold',
    },
    designation: {
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 5,
    },
    employeeCode: {
        fontWeight: 'bold',
    },
    letterContent: {
        marginBottom: 24,
    },
    paragraph: {
        marginBottom: 16,
        textAlign: 'justify',
    },
    signatureSection: {
        marginTop: 40,
        marginBottom: 20,
    },
    signatoryUrl: {
        width: 110,
        position: 'relative',
        left: -10,
        marginBottom: 10,
    },
    footer: {
        borderTop: '1px solid #CCC',
        paddingTop: 8,
        marginTop: 'auto',
        fontSize: 8,
        color: '#666',
        position: 'absolute',
        bottom: 40,
        left: 40,
        right: 40,
    },
});

const ExperienceLetterPDF = ({ letterData }) => {
    const pronoun = letterData.gender === 'male' ? 'him' : 'her';
    const possessive = letterData.gender === 'male' ? 'his' : 'her';

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Image style={styles.logo} src={letterData.logoUrl} />
                    <View style={styles.companyInfo}>
                        <Text style={styles.companyName}>{letterData.companyName}</Text>

                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Website:</Text>
                            <Text style={styles.infoValue}>{letterData.website}</Text>
                        </View>

                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>CIN:</Text>
                            <Text style={styles.infoValue}>{letterData.cin}</Text>
                        </View>

                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Email:</Text>
                            <Text style={styles.infoValue}>{letterData.email}</Text>
                        </View>

                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Phone:</Text>
                            <Text style={styles.infoValue}>{letterData.phone}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.redLineThin} />
                <View style={styles.redLine} />
                <Text style={styles.date}>Date: {letterData.date}</Text>
                <Text style={styles.title}>Experience Certificate</Text>
                <View style={styles.employeeInfo}>
                    <Text style={styles.employeeName}>{letterData.employeeName}</Text>
                    <Text style={styles.designation}>{letterData.designation}</Text>
                    <Text style={styles.employeeCode}>
                        Employee Code: {letterData.employeeCode}
                    </Text>
                </View>
                <View style={styles.letterContent}>
                    <Text style={styles.paragraph}>
                        This is to certify that {letterData.employeeName} was employed with us as a{' '}
                        {letterData.designation} from {letterData.startDate} to {letterData.endDate}
                        .
                    </Text>
                    <Text style={styles.paragraph}>
                        During the period of {possessive} assignment, we found {pronoun} sincere,
                        hardworking, and a keen learner.
                    </Text>
                    <Text style={styles.paragraph}>
                        We wish {pronoun} all the best in {possessive} future endeavors.
                    </Text>
                    <Text style={styles.paragraph}>For {letterData.companyName}</Text>
                </View>
                <View style={styles.signatureSection}>
                    <Image style={styles.signatoryUrl} src={letterData.signatoryUrl} />
                    <Text>{letterData.signatoryName}</Text>
                    <Text>{letterData.signatoryDesignation}</Text>
                </View>
                <View style={styles.footer}>
                    <Text>Registered Office: {letterData.registeredOffice}</Text>
                    <Text>Head Office: {letterData.headOffice}</Text>
                </View>
            </Page>
        </Document>
    );
};

const Letter = () => {
    const [letterData, setLetterData] = useState({
        logoUrl: 'https://scm.moglix.com/assets/logo.png',
        companyName: 'MOGLI LABS (INDIA) PRIVATE LIMITED',
        website: 'www.moglix.com',
        cin: 'U72300DL2015FTC279856',
        email: 'care@moglix.com',
        phone: '+91-9555988544',
        date: '23-Sept-22',
        employeeName: 'Abhishek Kumar',
        designation: 'Lead Web Developer - Online, Tech - Commerce',
        employeeCode: '11769',
        startDate: '21-Dec-16',
        endDate: '24-Sep-19',
        gender: 'male',
        signatoryUrl: 'https://i.ibb.co/pvK5fPZC/Screenshot-2025-07-21-at-5-25-24-PM.png',
        signatoryName: 'Saumya Khare',
        signatoryDesignation: 'Human Capital',
        registeredOffice:
            'Mez 1st Floor, A-83, Business Centre Okhla Industrial Area, Okhla Ph-II New Delhi 110020',
        headOffice: 'D-188, Sector-63, Noida, Uttar Pradesh India-201301',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLetterData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="p-6 flex flex-col md:flex-row gap-8 bg-gray-50 min-h-screen">
            {/* Form */}
            <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-2xl font-bold mb-4">Experience Letter Generator</h2>
                {Object.entries(letterData).map(([key, val]) =>
                    key !== 'gender' ? (
                        <input
                            key={key}
                            name={key}
                            value={val}
                            onChange={handleInputChange}
                            placeholder={key}
                            className="p-3 border rounded w-full"
                        />
                    ) : (
                        <select
                            key={key}
                            name="gender"
                            value={val}
                            onChange={handleInputChange}
                            className="p-3 border rounded w-full"
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    )
                )}
                <PDFDownloadLink
                    document={<ExperienceLetterPDF letterData={letterData} />}
                    fileName={`${letterData.employeeName.replace(
                        /\s+/g,
                        '_'
                    )}_Experience_Certificate.pdf`}
                    className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 font-medium"
                >
                    {({ loading }) => (loading ? 'Generating PDF...' : '📄 Download PDF')}
                </PDFDownloadLink>
            </div>

            {/* Preview */}
            <div className="w-full md:w-1/2 border rounded bg-white shadow">
                <div className="p-2 font-semibold text-gray-600 border-b">PDF Preview</div>
                <div className="h-[800px]">
                    <PDFViewer width="100%" height="100%">
                        <ExperienceLetterPDF letterData={letterData} />
                    </PDFViewer>
                </div>
            </div>
        </div>
    );
};

export default Letter;
