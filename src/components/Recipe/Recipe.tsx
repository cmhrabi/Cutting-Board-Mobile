import React from "react";
import { ImageSourcePropType, View, Image, Text } from "react-native";
import { borderRadius, theme, typography } from "../theme";


interface RecipeProps {
    name: string;
    img: ImageSourcePropType;
    description: string;
};

const Recipe = ({
    name,
    img,
    description
}: RecipeProps) => {
    return(
        <View style={{ borderColor: theme.colors.primary, borderWidth: 1, borderRadius: borderRadius.medium, padding: theme.spacing.small, width: '65%' }} >
            <Image style={{borderRadius: borderRadius.medium , width: '100%', height: 100}} source={img} alt={name} />
            <Text style={{ fontSize: typography.fontSizes.large, fontWeight: 'bold', marginTop: 20 }}>{name}</Text>
            <Text style={{ fontSize: typography.fontSizes.medium, marginTop: 20 }}>Category: {description}</Text>
        </View>
    )
}

export default Recipe;