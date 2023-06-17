// add the game address here and update the contract name if necessary
const gameAddr = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
const contractName = "Game2";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    const setx = await game.setX(20);
    await setx.wait()

    const sety = await game.setY(30)
    await sety.wait()

    // do whatever you need to do to win the game here:
    const tx = await game.win();
    await tx.wait()
    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
