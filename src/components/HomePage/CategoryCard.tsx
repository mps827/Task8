import classes from './style/CategoryCard.module.scss'
interface MyComponentProps {
    title?: String;
    icon?: JSX.Element | JSX.Element[];
}
const CategoryCard = (props: MyComponentProps) => {
    return (
        <div className={"flex flex-col justify-center  gap-4 bg-White dark:bg-Semi-Black border-Pale-White dark:border-Grey " + classes.categoryCard}>
            <div className={classes.icon}>{props.icon}</div>
            <h1 className='text-xl'>{props.title}</h1>
        </div>
    )
}
export default CategoryCard;