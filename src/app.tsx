import {
	ImageCard,
	Rows,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@canva/app-ui-kit";
import "styles/components.css";
import { useAddElement } from "utils/use_add_element";
import { cn } from "utils/utils";

export const App = () => {
	const addElement = useAddElement();

	const onClick = () => {
		addElement({
			type: "text",
			children: ["Hello Amiral"],
		});
	};

	return (
		<div className={cn("vskWekj5HDq1TVP4wC1w")}>
			<Tabs>
				<Rows spacing="1u">
					<TabList>
						<Tab id="design">Design</Tab>
						<Tab id="editor">Editor</Tab>
					</TabList>
					<TabPanels>
						<TabPanel id="design">
							<h1>Star Shapes Maker</h1>
							<p className={cn("uOZZE96QaGMurAfd5VB9")}>
								Add your star shape to your design
							</p>
							<p className={cn("Jsbw6K47C0zeDfxSoAp8")}>or</p>
							<p className={cn("uOZZE96QaGMurAfd5VB9")}>
								Drag your star shape to your design
							</p>
							{/* <h2>Star Shape</h2> */}
							{/* <ImageCard alt="starshape" thumbnailUrl="" /> */}
						</TabPanel>
						<TabPanel id="editor">
							<Text>Editor</Text>
						</TabPanel>
					</TabPanels>
				</Rows>
			</Tabs>
		</div>
	);
};
