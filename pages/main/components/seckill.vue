<template>
	<div className={styles.home_top_selling_tit} style={{marginTop:"46px"}} onClick={()=> router.push("/limitbuy")}>
		<div>限时秒杀</div>
		<div className={styles.home_top_selling_tit_right}>
			<span>23</span>:
			<span>23</span>:
			<span>11.11</span>
		</div>
	</div>
	<div className={styles.time_limit_selling}>
		<ProductItem image={mall_img_2} onClick={()=> router.push("/limitbuy")}/>
			<ProductItem image={mall_img_2} />
			<ProductItem image={mall_img_2} />
			<ProductItem image={mall_img_2} />
	</div>
	</div>
</template>

<script>
</script>

<style lang="less">

</style>
