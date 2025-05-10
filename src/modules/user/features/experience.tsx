import { useEffect } from "react";
import { fetchExperiences } from "../store/thunks/experienceThunk";
import { format } from "date-fns";
import { useAppDispatch, useAppSelector } from "../store";
import {SliderColumn } from "../components/timeline/card_slider_column";

export const ExperienceFeaturesJob = () => {
    const dispatch = useAppDispatch();
    const { experiences, loading, error } = useAppSelector((state) => state.experience);

    useEffect(() => {
    dispatch(fetchExperiences());
    }, [dispatch]);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!experiences.length) return <p>No Experience data available.</p>;

    const sortedExperiences = [...experiences].filter((value) => value.type == "job");

    const timelineData = sortedExperiences.map((exp) => ({
        _id: exp._id,
        subtitle: exp.entity,
        title: exp.position,
        description: exp.description,
        type: exp.type,
        startDate: format(new Date(exp.startDate), "yyyy MMMM"),
        endDate: format(new Date(exp.endDate), "yyyy MMMM"),
    }));

    return <SliderColumn title="Experiences" data={timelineData} />;
};

export const ExperienceFeaturesOrganization = () => {
    const { experiences, loading, error } = useAppSelector((state) => state.experience);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!experiences.length) return <p>No Experience data available.</p>;

    const sortedExperiences = [...experiences].filter((value) => value.type == "organizational");

    const timelineData = sortedExperiences.map((exp) => ({
        _id: exp._id,
        subtitle: exp.entity,
        title: exp.position,
        description: exp.description,
        type: exp.type,
        startDate: format(new Date(exp.startDate), "yyyy MMMM"),
        endDate: format(new Date(exp.endDate), "yyyy MMMM"),
    }));

    return <SliderColumn title="Organizational" data={timelineData} />;
};
