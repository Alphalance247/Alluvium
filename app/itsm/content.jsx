'use client'
import NoGuesswork from 'components/Alluvium-Redesign-2026/itsm/NoGuesswork';
import OpsginieMigration from 'components/Alluvium-Redesign-2026/itsm/OpsginieMigration'
import TheProblem from 'components/Alluvium-Redesign-2026/itsm/TheProblem';
import WhatWeDeliver from 'components/Alluvium-Redesign-2026/itsm/WhatWeDeliver';
import WhyTeam from 'components/Alluvium-Redesign-2026/itsm/WhyTeam';
import Layout from "components/layout";
import React from 'react'

const Content = () => {
    return (
        <Layout>
            <OpsginieMigration />
            <TheProblem />
            <WhatWeDeliver />
            <NoGuesswork />
            <WhyTeam />
        </Layout>
    )
}

export default Content